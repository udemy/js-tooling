import '@babel/polyfill';

function React() {}
function Component() {}
function Element() {}
function deco() {}

@deco
export default class Class extends Component {
    @deco prop1 = 13;
    prop2 = 14;
    @deco method1() {}
    method2() {}
    @deco get getter() {
        return 42;
    }
    render() {
        return (
            <div>
                <Element store={this.store} />
            </div>
        );
    }
}
