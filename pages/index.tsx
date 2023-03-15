import { useState, useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const UID = 'u-s4t2ud-19980a5b8fe8b9e7250f2b1239c325f3f6579c38cc696313f5c761013195ef93';
const SECRET = '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';
const REDIRECT_URI = "http://localhost:3000";

async function getToken(code: string) {
  const { data } = await axios.post('https://api.intra.42.fr/oauth/token', {
    grant_type: 'authorization_code',
    client_id: UID,
    client_secret: SECRET,
    code: code,
    redirect_uri: REDIRECT_URI,
  });
  return data.access_token;
}

function removeCodeFromUrl() {
  const { protocol, host, pathname } = window.location;
  const newUrl = `${protocol}//${host}${pathname}`;
  window.history.replaceState({}, document.title, newUrl);
}

const Home: FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { code } = router.query;
    if (code) {
      const tokenString = window.location.toString();
      const index = tokenString.indexOf('code=');
      if (index != -1) {        
        const token = tokenString.substring(index + 5, tokenString.length);
        console.log('token: ', token);
        localStorage.setItem('token', token);
        setLoggedIn(true); 
        removeCodeFromUrl();
      }
    }
  }, [router.query]);

  return <h1>home</h1>;
};

export default Home;
