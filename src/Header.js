import './App.css';

const Header=()=>{
    return(
        <div>
        <header class="global-navigation-row primary">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a class="navbar-brand" href="#">Bookie</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto"> 
              <input type='text' placeholder='search'></input>
              <button class="search">Search</button>
              <button class="signin">Sign In</button>
            </ul>
          </div>
          <div class="cart">
            <button>
            <img src='https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_1280.png'></img>
            </button>
          </div>
        </nav>
      </header>
      </div>
    )
}

export default Header;
