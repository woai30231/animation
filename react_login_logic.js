//用户欢迎语
function Usergreeting(props){
  return (
    <div>welcome back!</div>
  );
}
//客户欢迎语
function Guestgreeting(props){
  return (
    <div>please sign in!</div>
  );
}

//登陆按钮
function Loginbutton(props){
  return (
    <button onClick={props.onClick}>请登陆</button>
  );
};

//退出按钮
function Logoutbutton(props){
  return (
    <button onClick={props.onClick}>退出当前用户</button>
  );
};

//控制用户登陆与否操作
function ControlUserLog(props){
  var isUserLogin = props.isUserLogin;
  if(isUserLogin){
    return <Logoutbutton />
  };
  return <Loginbutton />
};

function Isuserlogin(props){
  var isUserLogIn = props.isuser;
  if(isUserLogIn){
    return <Usergreeting />;
  };
  return <Guestgreeting />;
};

class UserLogLogic extends React.Component{
  constructor(props){
    super(props);
    this.toUserLogin = this.toUserLogin.bind(this);
    this.toUserLogout = this.toUserLogout.bind(this);
    this.state = {isUserLogin:false};
  };
  toUserLogin(){
    console.log('11111')
    this.setState({
      isUserLogin:true
    });
  };
  toUserLogout(){
    console.log('2222')
     this.setState({
      isUserLogin:false
    });
  }
  
  render(){
    const isLogin = this.state.isUserLogin;
    let button = null;
    if(isLogin){
      button = (<Logoutbutton onClick={this.toUserLogout}/>);
    }else{
      button = (<Loginbutton onClick={this.toUserLogin} />);
    };
    return (
      <div>
           <Isuserlogin isuser={this.state.isUserLogin} />
           { button }
      </div>
    );
  };
};

ReactDOM.render(
  <UserLogLogic />,
  document.getElementById('root')
);