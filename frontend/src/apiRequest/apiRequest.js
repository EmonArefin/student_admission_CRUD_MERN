import axios from "axios";

export async function registrationFormRequest(){
    try {
        let response = await fetch("http://localhost:8080/api/all-registration-form")
        let jsonData = await response.json()
        return jsonData["data"]
    } catch (error) {
        console.error(error)
    }
}

export async function createRegistrationFormRequest(postBody){
    try {
        let response = await axios.post("http://localhost:8080/api/create-registration-form", postBody)
        if (response.status==200){
            return true
        } else{
            return false
        }
    } catch (error) {
        return false
    }
}

export async function updateRegistrationFormRequest(postBody, id){
    try {
        let response = await axios.post("http://localhost:8080/api/update-registration-form/"+id, postBody)
        if (response.status==200){
            return true
        } else{
            return false
        }
    } catch (error) {
        return false
    }
}

export async function deleteFormRequest(id){
    try {
        let response = await fetch("http://localhost:8080/api/delete-form/"+id)
        let jsonData = await response.json()
        if(jsonData['status']==="success"){
            return  true;
        }else{
            return  false;
        }
    } catch (error) {
        return false
    }
}

export async function registrationIdRequest(id){
    try {
        let res=await fetch("http://localhost:8080/api/registration-id/"+id);
        let jsonData=await res.json();
        return jsonData['data'][0];
    }catch (e) {
        return []
    }
}

