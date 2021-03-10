

const URL_API = "";
const TOKEN_API ="";

export function GETBOOK_SKOOB_(jsonBodyPOST){

    let Data= fetch(URL_API,{ method:"post",
                          headers: {
                              "Authorization":"Bearer "+TOKEN_API,
                              "Content-Type":"application/json"
                          },
        body: JSON.stringify({jsonBodyPOST})
    });

    return Data.then(response => response.json());

}
