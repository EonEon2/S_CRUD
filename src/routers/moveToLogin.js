import useMember from "../stores/useMember";

export const moveToLogin = (to,from,next) => {
    const {computedMid,userId,toMid} = useMember()

    const checkLogin = () => {
        return computedMid.value ? true:false

        
    }  

    if(checkLogin()){
        console.log('move list')
        next()
    }
    else{
        console.log('Login please')
        next('/signin')
    }

}
