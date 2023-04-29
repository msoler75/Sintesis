import { printObject } from "../utils/Print.js";
import Dictionary from "./Dictionary.js";
import Variable from "./Variable.js";
import Single from "./Single.js";
import Class from "./Class.js";
import List from "./List.js";
import valueOf from "./ValueOf.js";
import MemoryRef from "./MemoryRef.js";

const variableCreate = function (src) {
  if (src === undefined) return new Variable();
  if (src === null) return new Variable(null);
  if (src instanceof MemoryRef) src = src.variable;
  if (src instanceof Variable) return src;
  if (Array.isArray(src)) return new List(src);
  if (typeof src === "object") return new Dictionary(src);
  return new Single(src);
};

// extends variable classes

Object.defineProperty(Variable.prototype, "toString", {
  value: function () {
    return printObject(this.value);
  },
});

Object.defineProperty(Dictionary.prototype, "getMemberRef", {
  value: function (key, create) {
    if (!(key in this._value)) {
      if (!create) return null;
      this._value[key] = variableCreate(null);
    }
    return this._value[key];
  },
});

Object.defineProperty(Dictionary.prototype, "setValue", {
  value: function (key, value) {
    if (value instanceof Variable)
      // throw new Error('setValue no permite asignar una Variable')
      return this.setVariable(key, value);
    this._value[key] = variableCreate(value);
  },
});

Object.defineProperty(List.prototype, "_initList", {
  value: function (obj, arr) {
    if (arr)
      for (const i in arr) {
        if (arr[i] instanceof Variable) obj.setVariable(i, arr[i]);
        else if (Array.isArray(arr[i])) obj.setVariable(i, new List(arr[i]));
        else if (arr[i] !== null && typeof arr[i] === "object")
          obj.setVariable(i, new Dictionary(arr[i]));
        else obj.setValue(i, arr[i]);
      }
  },
});

/*
const _createEmptyArraySizes = function (sizes, idx, initialValue) {
  let r = [];
  for (let i = 0; i < sizes[idx]; i++)
    r[i] =
      idx + 1 < sizes.length
        ? _createEmptyArraySizes(sizes, idx + 1, initialValue)
        : new Variable(initialValue);
  return r;
};
*/

/*const createVectorWithSizes = function (sizes) {
  const vec = new Vector([]);
  if (!sizes) return vec;
  if (typeof sizes == "string") vec._value = sizes.split("");
  else {
    if (typeof sizes == "number") sizes = [sizes];
    if (!Array.isArray(sizes))
      throw new Error("Error creating Vector: arg must be an array");
    vec._value = new Vector(_createEmptyArraySizes(sizes, 0, vec.defaultValue));
  }
  return vec;
};*/

function _checkIndex(index, canBeAlfa) {
  if (typeof index === "string" && index.match(/^\d+$/))
    index = parseInt(index);
  if (!canBeAlfa && typeof index === "string")
    throw new Error("el índice debe ser numérico");
  return index;
}

function executeListMethod(ctx, ref, method, args) {
  const array = ref._variable.value;
  const v0 = args.length > 0 ? args[0] : null;
  const v1 = args.length > 1 ? args[1] : null;
  // const v2 = args.length > 2 ? variableCreate(args[2]) : null;
  // List;
  switch (method) {
    case "extend":
    case "extender":
      const arr0 = valueOf(v0);
      if (Array.isArray(arr0)) {
        for (const i in arr0) array.push(variableCreate(arr0[i]));
        return ref;
      }
    // si no es un array, lo asume como un elemento para push:
    case "push":
    case "append":
    case "agregar":
      array.push(variableCreate(v0));
      return ref;
    case "clear":
    case "vaciar":
      array.splice(0, array.length);
      return ref;
    case "copy":
    case "copiar":
      return [...array];
    case "length":
    case "longitud":
      return array.length;
    case "indexOf":
    case "indiceDe":
    case "índiceDe":
      var vv0 = variableCreate(v0);
      for (var i in array) {
        const si = i.match(/^\d+$/) ? parseInt(i) : i;
        if (vv0.equals(array[i])) return si;
      }
      return -1;
    case "insert":
    case "insertar":
      if (args.length == 1) array.unshift(variableCreate(v0));
      else if (args.length > 1)
        array.splice(valueOf(v0), 0, variableCreate(v1));
      return ref;
    case "pop":
    case "sacar":
      if (array.length) {
        if (v0) {
          const v0i = valueOf(v0);
          if (v0i in array) return array.splice(v0i, 1)[0];
          else return new Single(null);
        }
        return array.pop();
      }
      return new Single(null);
    /* case "removeValue":
    case "removerValor":
      const idx = executeListMethod(ctx, ref, "indexOf", args);
      if (idx >= 0) {
        array.splice(idx, 1);
        return 1;
      }
      return -1; */
    case "reverse":
    case "invertir":
      // ref.value =
      array.reverse();
      return ref;
    case "sort":
    case "ordenar":
      array.sort((a, b) => a.compareTo(b));
      return ref;
    case "sub":
      return args.length>1?array.slice(v0, v1):array.slice(v0)      
  }
  throw new Error(`método '%s' no encontrado`);
}

Object.defineProperty(List.prototype, "getMemberRef", {
  value: function (index, create) {
    index = _checkIndex(index, true);
    if (!(index in this._value)) {
      if (
        ![
          "push",
          "append",
          "agregar",
          "clear",
          "vaciar",
          "copy",
          "copiar",
          "length",
          "longitud",
          "extend",
          "extender",
          "indexOf",
          "indiceDe",
          "índiceDe",
          "insert",
          "insertar",
          "pop",
          "sacar",
          //"removeValue",
          // "removerValor",
          "reverse",
          "invertir",
          "sort",
          "ordenar",
          "sub"
        ].includes(index) &&
        !create
      )
        throw new Error("atributo '%s' no encontrado");
      // rellenamos las posiciones vacías con el valor null
      for (let i = this._value.length; i <= index; i++)
        this._value[i] = variableCreate(null);
    }
    if (typeof index === "string" && index !== "length") return this; // lo procesaremos distinto
    return this._value[index];
  },
});

Object.defineProperty(List.prototype, "setVariable", {
  value: function (index, vari) {
    if (!(vari instanceof Variable))
      throw new Error("List.setVariable exige una Variable");
    index = _checkIndex(index);
    this.getMemberRef(index, true); // para expandir índices si acaso no existen
    this._value[index] = vari;
  },
});

Object.defineProperty(List.prototype, "appendVariable", {
  value: function (value) {
    return this.setVariable(this.size(), value);
  },
});

Object.defineProperty(List.prototype, "insertVariable", {
  value: function (value) {
    this._value.unshift(new Variable());
    return this.setVariable(0, value);
  },
});

Object.defineProperty(List.prototype, "setValue", {
  value: function (index, value) {
    if (value instanceof Variable) return this.setVariable(index, value);
    //throw new Error('setValue no permite asignar una Variable')
    index = _checkIndex(index);
    let ref = this.getMemberRef(index, true);
    if (ref) ref.value = value;
  },
});

Object.defineProperty(List.prototype, "insertValue", {
  value: function (value) {
    this._value.unshift(new Variable());
    return this.setValue(0, value);
  },
});

Object.defineProperty(List.prototype, "appendValue", {
  value: function (value) {
    return this.setValue(this.size(), value);
  },
});

Object.defineProperty(List.prototype, "delete", {
  value: function (index) {
    index = _checkIndex(index);
    let len = this._value.length;
    if (len <= index) return;
    if (len - 1 == index) this._value.pop();
    else {
      this._value.splice(index, 1);
    }
  },
});

function executeStringMethod(ctx, ref, method, args) {
  const str = ref._variable.value;
  const v0 = args.length > 0 ? args[0] : null;
  const v1 = args.length > 1 ? args[1] : null;
  // const v2 = args.length > 2 ? variableCreate(args[2]) : null;
  // List;

  switch (method) {
    case "upper":
    case "mayusculas":
    case "may\u00FAsculas":
    case "maiusculas":
    case "mai\u00FAsculas":
      return str.toUpperCase();
    case "lower":
    case "minusculas":
    case "min\u00FAsculas":
    case "minuscule":
    case "minuscolo":
      return str.toLowerCase();
    case "sub":
      if (v0 === null || v0 === undefined) return str;
      return args.length > 1 ? str.substring(v0, v1) : str.substring(v0);
    case "indiceDe":
    case "indexOf":
      return str.indexOf(v0);
    case "split":
    case "dividir":
      return str.split(v0);
    case "trim":
    case "limpiar":
    case "nettoyer":
    case "pulire":
      return str.trim();
    case "replace":
    case "reemplazar":
      return v0 instanceof RegExp
        ? str.replace(v0, v1)
        : str.replace(new RegExp(v0, "g"), v1);
  }
  throw new Error(`método '%s' no encontrado`);
}

export { variableCreate, executeListMethod, executeStringMethod };
