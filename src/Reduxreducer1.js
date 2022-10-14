

const initialstate={
    session_id:'',
    user_id:'',
    messages:[
        {message_id:0 , message:''} ,
    ] ,
    count:1
             
}
export const reducer_fun1=(state=initialstate , action)=>{
      switch(action.type){
        case 'RECIEVEMESSAGE':
            let t = [...state.messages]
            t.push({message_id:state.count , message:action.payload})
            
            return{
                 ...state , messages:t , count:state.count++
            }
        case 'SET1':
            return{
               ...state , session_id:action.payload.t1 , user_id:action.payload.t2
            }
        default:
            return{
                ...state
            }
      }
}
