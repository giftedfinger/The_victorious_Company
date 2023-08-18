
import './glassmorphism.css'

const glassmorphism =(props)=> {

    const  classes = `glassmophism   ${props.className}`;
  
  return <div className={classes}>{props.children}</div>;

  
}

export default glassmorphism
