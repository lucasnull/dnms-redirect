# Como criar redirects

Na pasta redirects, criar um arquivo .js, com qualquer nome 
(exceto index.js) com a seguinte estrutura:

```js
module.exports = {
    url: string
    redirectTo: string
}
```

No código abaixo por exemplo, ao acessar "https://dnms.online/youtube-live" o usuário será redirecionado para "https://www.youtube.com/w?=abc123"

```js
module.exports = {
    url: "youtube-live",
    redirectTo: "https://www.youtube.com/w?=abc123"
}
```