const atob = require('atob');
const fetch = require('node-fetch');
const https = require('https');
const { URLSearchParams } = require('url');
const httpsAgent = new https.Agent({rejectUnauthorized: false});

async function generarToken(ruc, pas) {
  const myHeaders = { "Content-Type": "application/x-www-form-urlencoded"};
  const urlencoded = new URLSearchParams();
  /*urlencoded.append("grant_type", "password");
  urlencoded.append("scope", "https://api-cpe.sunat.gob.pe");
  urlencoded.append("client_id", "9cae24a9-10d7-48b0-bee0-e94bd56947e3");
  urlencoded.append("client_secret", "k0z9G2xsxCXVZe2whZ7p7UXzx8NOx08hpe3Qn5fKp8");
  urlencoded.append("username", ruc + 'MODDATOS');
  urlencoded.append("password", pas);*/
  urlencoded.append("grant_type", "password");
  urlencoded.append("scope", "https://api-cpe.sunat.gob.pe");
  urlencoded.append("client_id", "9cae24a9-10d7-48b0-bee0-e94bd56947e3");
  urlencoded.append("client_secret", "k0z9G2xsxCXVZe2whZ7p7UXzx8NOx08hpe3Qn5fKp8");
  urlencoded.append("username", ruc + 'MODDATOS');
  urlencoded.append("password", pas);

  const requestOptions = {
    method: 'POST',
    agent: httpsAgent,
    headers: myHeaders,
    body: urlencoded
  };

  /*const resp = await fetch("https://api-seguridad-desa.sunat.gob.pe:444/v1/clientessol/9cae24a9-10d7-48b0-bee0-e94bd56947e3/oauth2/token/", requestOptions);
  const result = await resp.json();
  const parserToken = JSON.parse(atob(result.access_token.split('.')[1]));
  const data = {
    currentData: parserToken.aud,
    userData:  JSON.stringify(parserToken.userdata),
    token: result.access_token
  };
  return data;*/
  const resp = await fetch("https://api-seguridad.sunat.gob.pe/v1/clientessol/9cae24a9-10d7-48b0-bee0-e94bd56947e3/oauth2/token", requestOptions);
  const result = await resp.json();
  const parserToken = JSON.parse(atob(result.access_token.split('.')[1]));
  const data = {
    currentData: parserToken.aud,
    userData:  JSON.stringify(parserToken.userdata),
    token: result.access_token
  };
  console.log(data)
  return data;
}

module.exports = generarToken;
