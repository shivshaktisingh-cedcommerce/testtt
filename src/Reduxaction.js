export const sendmessage=(t)=>{
    return {
          type:'SENDMESSAGE' ,
          payload:t
    }
}
export const setsessionanduser=(t1 , t2)=>{
    return {
          type:'SET' ,
          payload:{t1 , t2}
    }
}
export const recievemessage=(t)=>{
    return {
          type:'RECIEVEMESSAGE1' ,
          payload:t
    }
}
export const setsessionanduser1=(t1 , t2)=>{
    return {
          type:'SET1' ,
          payload:{t1 , t2}
    }
}

