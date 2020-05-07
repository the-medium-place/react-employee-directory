import axios from "axios";

const URL = "https://randomuser.me/api/?inc=gender,name,email,phone,cell,picture&results=200&nat=US"

export default {
    search: function(){
        return axios.get("https://randomuser.me/api/?inc=name,email,location,cell,picture&results=200&nat=US"
        )
    }
};
