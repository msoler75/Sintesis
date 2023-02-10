import { printObject } from "../utils/Print.js";
import Dictionary from "./Dictionary.js";
import Variable from "./Variable.js";
import Single from "./Single.js";
import List from "./List.js";
import MemoryRef from "./MemoryRef.js"

const variableCreate = function (src) {
  if (src instanceof Variable) return src;
  if (src === undefined || src === null) return new Variable();
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

Object.defineProperty(Dictionary.prototype, "getRef", {
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
    for (const i in arr) {
      if (arr[i] instanceof Variable) obj.setVariable(i, arr[i]);
      else if (Array.isArray(arr[i]))
        obj.setVariable(i, new List(arr[i]));
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

function _checkIndex(index) {
  if (typeof index === "string" && index.match(/^\d+$/))
    index = parseInt(index);
  if (typeof index === "string")
    throw new Error("índices no numérico");
  return index;
}

Object.defineProperty(List.prototype, "getRef", {
  value: function (index, create) {
    index = _checkIndex(index);
    if (!(index in this._value)) {
      if (!create) return new SintesisError("out of range");
      for (let i = this._value.length; i <= index; i++)
        this._value[i] = variableCreate(null);
    }
    return this._value[index];
  },
});

Object.defineProperty(List.prototype, "setVariable", {
  value: function (index, vari) {
    if (!(vari instanceof Variable))
      throw new Error("setVariable exige una Variable");
    index = _checkIndex(index);
    this.getRef(index, true); // para expandir índices si acaso no existen
    this._value[index] = vari;
  },
});

Object.defineProperty(List.prototype, "appendVariable", {
  value: function (value) {
    return this.setVariable(this.size(), value)
  },
});

Object.defineProperty(List.prototype, "insertVariable", {
  value: function (value) {
    this._value.unshift(new Variable())
    return this.setVariable(0, value)
  },
});

Object.defineProperty(List.prototype, "setValue", {
  value: function (index, value) {
    if (value instanceof Variable) return this.setVariable(index, value);
    //throw new Error('setValue no permite asignar una Variable')
    index = _checkIndex(index);
    let ref = this.getRef(index, true);
    if (ref) ref.value = value;
  },
});

Object.defineProperty(List.prototype, "insertValue", {
  value: function (value) {
    this._value.unshift(new Variable())
    return this.setValue(0, value)
  },
});

Object.defineProperty(List.prototype, "appendValue", {
  value: function (value) {
    return this.setValue(this.size(), value)
  },
});

Object.defineProperty(List.prototype, "delete", {
  value: function (index) {
    index = _checkIndex(index);
    let len = this._value.length;
    if (len <= index) return;
    if (len - 1 == index) this._value.pop();
    else {
      this._value.splice(index, 1)
    }
  },
});

export { variableCreate };
