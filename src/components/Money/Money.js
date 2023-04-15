const Money = ({money} ) => {
  return (
    <div className='money'>
      <h2>{money.title}</h2>
      <div className='money__info'>
        <div className='money__item with-border'>
          <h3>Rent</h3>
          <p>{money.rent}</p>
          <div className='money__description'>
            This is for a 3 bedroom(40Sqm) within city center.
          </div>
        </div>
        <div className='money__item with-border'>
          <h3>Groceries</h3>
          <p>{money.groceries}</p>
          <div className='money__description'>
            The average cost of Groceries for a family of 4.
          </div>
        </div>
        <div className='money__item with-border'>
          <h3>Others</h3>
          <p>{money.other}</p>
          <div className='money__description'>
            Gas, Water, Electricity, and Internet.
          </div>
        </div>
        <div className='money__item'>
          <h3>Total</h3>
          <p>{money.total}</p>
          <div className='money__description'>
            This is the average mothly spending for a family of four(4).
          </div>
        </div>
      </div>
    </div>
  )
}

export default Money;