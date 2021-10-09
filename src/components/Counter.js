import React, { Component } from 'react'
import "./CounterStyle.css";
export default class Counter extends Component {
// Constructor is generally used for two main purposes:
// this.stateCreating the local state by assigning an object to .
// bind()Binding event methods to the component using the method .
// Başlangıç state'i tanımlamak ve bir fonksiyonu componente bind etmek için en uygun yer constructor. Bu iki tanımlamaya ihtiyacınız yoksa constructor methodunu tanımlamayabilirsiniz.
    constructor(props) {
        super(props);

        this.state = {
            name: "Hilmi",
            count: 0,

        };
        console.log("constructor")
    };
    increase =()=>{
        this.setState({count:this.state.count+1})
    }
    decrease =()=>{
        this.setState({count:this.state.count-1})
    }
    reset =()=>{
        this.setState({count:0})
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps",props, state)
        return null;
    };

    // Yeni props ve state alınıp, render edilmeden önce bu method çağrılır. React ' da herhangi bir state değişince otomatik olarak render methodu çalışır. Bu da aslında kendisiyle alakası olmayan state değişiminden, başka bir componentin etkilenmesi ve boşuna render edilip, zaten hali hazırda olan aynı görseli oluşturması demek. Bu yüzden props veya state değişikliği, ilgili componentinizi etkilemiyorsa, bu methodu kullanıp, ciddi bir performans kazanabilirsiniz.
    shouldComponentUpdate(nextProps, nextState) {
        console.log("should update?")
        return true;
    }
    
    // Component mount edildiğinde apar topar çağrılan methodumuz. DOM'a etki eden bir şeyin tanımlanması gereken yer burası. Atıyorum D3.js gibi third party bir library kullanacaksanız, başlangıç değerlerini burada atayın. Bir API çağıracaksanız, bir şeyi fetch edecekseniz en müsait yer bu method.
    componentDidMount() {
        console.log("componet mounted")
    };

    //shouldComponent false dönerse bu method çağrılmaz. render methodundan sonra hemen çağrılan methoddur. Hali hazırdaki props değeri ile bir önceki propsu karşılaştırmak için idealdir.
    componentDidUpdate(prevProps, prevState) {
        console.log("updated!")
    }

    // Her props alındığında bu method çağrılır (render methodundan sonra). Bu method componentDidUpdate ile kullanılmalıdır ve boolean değer dönmelidir. Bu methodun döndüğü değer componentDidUpdate'in 3. parametresi olacaktır.
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("snapshot",prevProps,prevState)
        return null;
    }

    //  Componentimiz artık yok edilecekken, yok edilmeden hemen önce çağrılan method. Componentin başında yaptığımız bir listener'ı kaldırmak için, önceden yapılmış bir network requestini iptal etmek için, özetle bir şeyleri sıfırlamak için çok ideal bir yer. Component'e gitmeden önce hesap sorduğumuz yer diyelim.
    componentWillUnmount() {
        console.log("will unmount Bye!")
    }
    
    // Bu method çağrılınca karşılığında size, ona verdiğiniz props ve state'e göre <div />, <img /> gibi sizin tanımladığınız bir DOM componentinin görünümü verecektir.
    render() {
        console.log("render")
        return (
            <div className="container">
                <h2>My Counter</h2>
                <p>counter:{this.state.count}</p>
                <button onClick={()=> this.increase()}>Arttır</button>
                <button onClick={()=> this.decrease()}>Azalt</button>
                <button onClick={()=> this.reset()}>Sıfırla</button>
                <button onClick={()=> this.componentWillUnmount()}>Unmount</button>
               
            </div>
        )
    }
}