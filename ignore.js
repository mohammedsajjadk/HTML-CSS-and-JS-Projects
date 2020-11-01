async function getCountryName(countryCode) {
    try{
        const req = await fetch('http://restcountries.eu/rest/v2/all')
        if(req.status === 200) {
            const data = await req.json();
            const dd = data.find(curr => curr.alpha2Code === countryCode)
            return dd.name;
        }else {
            throw new Error("Unable to fetch puzzle");
          }
    }catch(err) {
        console.log(err);
    }
}

async function getLocation() {
    try{
        const req = await fetch('http://ipinfo.io/json?token=12c83c8eba09fa')
        if(req.status === 200) {
            const data = await req.json();
            return data.country;
        }else {
            throw new Error("Error bro");
          }
    }catch(err) {
        console.log(err);
    }
}

const getCurrentCountry  = async () => {
    const location = await getLocation();
    console.log(location)
    const country  = await getCountryName(location);
    return country;
}

getCurrentCountry().then(console.log)