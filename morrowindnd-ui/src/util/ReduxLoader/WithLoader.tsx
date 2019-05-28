import React, { Component, ComponentType } from "react";
import {Subtract, Assign} from "utility-types"

export interface Loader<A,B> {
    load(a : A) : Promise<B>
}

type WithLoaderState<T extends Object> = {
    data: T
}

export default function withLoader<A extends Object,B extends Object>(loader : Loader<A,B>) {
    
    return function<X extends B>(CVar : ComponentType<X>) {
        type Req = Subtract<X,B> & A
        return class extends Component<Req, WithLoaderState<B>> {
            async componentWillMount() {
                if(!this.state || !this.state.data) {
                    let a : A = (this.props as unknown) as A
                    let data = await loader.load(a)
                    this.setState({data: data})
                }
            }

            render() {
                if(this.state && this.state.data)
                    return <CVar {...this.props as unknown as X} {...this.state.data}/>
                else
                    return "Loading"
            }
        }
    }
}