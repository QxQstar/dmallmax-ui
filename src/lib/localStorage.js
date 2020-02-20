export default {
  get ( name ) {
    if ( typeof name !== "string" ) {
      return {};
    }

    return JSON.parse( localStorage.getItem( name ) );
  },
  set ( name, value ) {
    if ( typeof name !== "string" || typeof value === "undefined" ) {
      return;
    }

    localStorage.setItem( name, JSON.stringify( value ) );
  },
  del ( name ) {
    if ( typeof name !== "string" ) {
      return {};
    }

    localStorage.removeItem( name );
  },
  clear () {
    localStorage.clear();
  }
}
