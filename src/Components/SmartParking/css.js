import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
root:{
    flexGrow:1,
    padding:'40px',
    [theme.breakpoints.down("sm")]: {
        padding:'10px'
    }
},
header:{
    display:'flex',
    padding:"20px",
    color:'#00BBDC',
    [theme.breakpoints.down("sm")]: {
        padding:'0px'
    }
},
buttons:{
    width:'80%',
    margin:'10px',
    color:'white',
    padding:'10px',
    backgroundColor:'#00BBDC',
    '&:hover':{
        color:'#ffff',
        backgroundColor:'#00BBDC',    
    },
    [theme.breakpoints.down("sm")]: {
        width:"auto"    }
},
unClickButtons:{
    width:'80%',
    margin:'10px',
    color:'#00BBDC',
    padding:'10px',
    backgroundColor:'#ffff',
    '&:hover':{
        color:'#ffff',
        backgroundColor:'#00BBDC',    
    },
    [theme.breakpoints.down("sm")]: {
        width:"auto"    }

},
number:{
    borderRadius:'20px',
    padding:'8px',
    margin:'5px',
    color:'#ffff',
    fontSize:'10px',
    backgroundColor:'#00BBDC'
},
oicssgrid:{
    padding:'40px',
    marginTop:'30px'
},
oicssheader:{
    color:'#696871'  
},
underContent:{
    paddingTop:'20px',
    lineHeight:'1.7em',
    color:'#19191B'
},
spantext:{
 
}
}))