
import './glassmorphism.css'

const glassmorphism =(props)=> {

    const  classes = `glassmophism   ${props.className}`;
  
  return <div style = {props.style} className={classes}>{props.children}</div>;

  
}

export default glassmorphism
