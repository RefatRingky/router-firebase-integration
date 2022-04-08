import { useEffect, useState } from "react"

const useFirebase = ()=>{
    const [user,setUser] = useState({});

    useEffect(()=>{

    },[]);
    const signInWithGoogle = ()=>{
        console.log('signing is soon');
    }
    // return [user,setUser];
    return {user,signInWithGoogle}
}
export default useFirebase;
