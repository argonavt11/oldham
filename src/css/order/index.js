import { StyleSheet } from 'aphrodite/no-important';

export default StyleSheet.create({
    orderPage:{
        width:'100%',
        width: 'calc(100% + 30px)',
        marginLeft:-15,
        marginTop:-15,
        overflow:'hidden',
        paddingBottom:30
    },
    orderTitle:{
        fontSize:14,
        textAlign:'center',
        height:45,
        width:'100%',
        lineHeight:'45px',
        color:'#ffffff',
        fontFamily: 'GothamPro-Medium',
        marginTop:0,
        marginBottom:0
    },
    orderTitleSpan:{
        fontSize:21,
    },
    items:{
        width:'100%',
        overflow:'hidden'
    },
    itemTitle:{
        height:30,
        lineHeight:'30px',
        width:'100%',
        paddingLeft:15,
        paddingRight:15,
        background:'#2c2c2c',
        marginTop:0,
        fontSize:13,
        color:'#ffffff'
    },
    itemWrap:{
        width:'100%',
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:20
    },
    inputBlock:{
        position:'relative',
        marginBottom:15
    },
    inputLabel:{
        position:'absolute',
        marginBottom:0,
        color:'#4f545a',
        height:37,
        lineHeight:'37px',
        fontFamily: 'GothamPro-Medium',
    },
    inputInput:{
        width:'100%',
        height:37,
        border:0,
        background:'rgba(0,0,0,0)',
        borderBottom:'1px solid #585b60',
        fontFamily: 'GothamPro-Medium',
    },
    inputBlockDuo:{
        width:'50%',
        float:'left'
    },
    inputBlockDuoOne:{
        paddingRight:15
    },
    inputBlockDuoTwo:{
        paddingLeft:15
    },
    deferItem:{
        borderTop:'1px solid #585b60',
        borderBottom:'1px solid #585b60',
        padding:20,
        paddingLeft:30,
        paddingRight:30
    },
    deferInput:{
        width:'100%',
        height:45,
        border:0,
        padding:0,
        paddingRight:15,
        borderBottom:'1px solid #585b60',
        background:'rgba(0,0,0,0)',
        color:'#fff',
        textAlign:'left'
    },
    defer:{
        width:'100%',
        overflow:'hidden'
    },
    none:{
        display:'none'
    },
    deferP:{
        color:'#4f545a',
        fontFamily: 'GothamPro-Medium',
        fontSize:12,
        marginBottom:5
    },
    timeWr:{
        overflow:'hidden'
    },
    borderTopNone:{
        borderTop:0
    }
})