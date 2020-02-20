export default {
  set( name, value, expiredays = 0,domain = '') {
    if ( typeof name !== "string" || typeof value !== "string" ) {
      return;
    }

    const exdate = new Date();

    exdate.setDate( exdate.getDate() + expiredays );
    document.cookie = name + "=" + encodeURI( value ) + (!expiredays ? "" : ";expires=" + exdate.toGMTString()) + ( !domain ? "":";domain="+domain )
  },
  del(name) {
    this.set(name, "", -1);
  },
  get(name) {
    if ( typeof name !== "string" ) {
      return "";
    }

    if ( document.cookie.length > 0 ) {
      let start = document.cookie.indexOf( name + "=" );
      if ( start !== -1 ) {
        start = start + name.length + 1;
        const end = document.cookie.indexOf( ";", start );
        return decodeURI( document.cookie.substring( start, end === -1 ? document.cookie.length : end ) );
      }
    }

    return "";
  },
  clearAll () {
    const group = document.cookie.split(';');
    group.forEach(item => {
      const key = item.split('=');
      this.del(key[0].trim());
    })
  }
}
