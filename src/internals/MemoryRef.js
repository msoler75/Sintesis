import Variable from './Variable.js'
import Dictionary from './Dictionary.js'
import List from "./List.js"
import Instance from './Instance.js'
import Function from './Function.js'
import valueOf from './ValueOf.js'
import Class from './Class.js'
import {
    variableCreate,
} from './Factory.js'
import Single from './Single.js'


class MemoryRef {
    constructor(variable, index) {
        if (variable)
            this.variable = variable
        // else 
        //  console.warn('memoryref with undefined variable?')
        this._index = index
        // this.recentChanged = true
    }

    get variable() {
        if (this._variable === undefined) return undefined
        if (this._index !== undefined)
            {
                try {
                    var r = this._variable.getMemberRef(this._index)
                }
                catch (err) {
                    return new Variable()
                }
                // if(this._variable instanceof List)
                   // r = variableCreate(r.value) // copia
                return r
            }
        return this._variable
    }

    set variable(vari) {
        if (!(vari instanceof Variable) && !(vari instanceof Class) && !(vari instanceof Error))
            throw new Error('Debe establecer un objeto Variable/Class/Error en MemoryRef')
        if (this._variable && this._index !== undefined /*&& this._variable.constructor.name===vari.constructor.name*/ )
            this._variable.setValue(this._index, vari)
        else
            this._variable = vari
    }

    assign(value) {
        // this.recentChanged = true
        //if(this._variable instanceof RefClass)
        //  console.error("No puede asignar a RefClass")
        if (value instanceof MemoryRef)
            value = value.variable
        let literal = valueOf(value)
        // let valueIsVarType = value instanceof Variable || value instanceof Function || value instanceof Instance
        // if(['number', 'string', 'boolean'].includes(typeof literal))
          // value = variableCreate(literal)
        /*if (!this._variable) {
            if (!valueIsVarType)
                value = variableCreate(value)
            this._variable = value
        } else if (typeof literal === 'object' && valueIsVarType) {
            this.variable = value
        } else if ((
                (this.variable instanceof Instance) ||
                (this.variable instanceof List && !Array.isArray(literal)) ||
                (this.variable instanceof Dictionary && (Array.isArray(literal) || typeof literal !== 'object')) ||
                (this.variable instanceof Single && (Array.isArray(literal) || !['number', 'string', 'boolean', 'object'].includes(typeof literal))))) {
            this.variable = variableCreate(literal)
        } else
            this.variable.value = literal */
        if(['number', 'string', 'boolean'].includes(typeof literal))
        {
            // if (!this._variable)
            this.variable = variableCreate(literal)
        }
        else {
            const isVarType = value instanceof Variable || value instanceof Function || value instanceof Instance
            if (!this._variable)
            {
                if(isVarType)
                    this._variable = value;
                else
                    this._variable = variableCreate(value)
            }
            else {
                if(isVarType)
                    this.variable = value;
                else
                    this.variable.value = value
            }
        }
    }

    /*clearChanged() {
        this.recentChanged = false
    }*/


    increment(inc) {
        if (!this.variable)
            this.variable = variableCreate(0)
        this.variable.value += inc
    }

    get value() {
        return this.variable ? this.variable.value : null
    }

}




export default MemoryRef