export function ThrowError(){
    try{
        throw new Error('test')
    }catch(error){
        throw new Error(error.message)
    }
}