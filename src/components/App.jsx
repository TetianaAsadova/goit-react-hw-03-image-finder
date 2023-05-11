import Searchbar from "./Searchbar";

export const App = () => {
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

  const APY_KEY = 34821518 - f662f92316867637fb490ee01;

  findItems = () => {
    
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
   
      <Searchbar onSubmit={this.findItems}/>
    </div>
  );
};
