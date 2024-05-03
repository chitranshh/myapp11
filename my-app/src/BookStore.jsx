import React from 'react'
import Book from './Book'

function BookStore() {
  const books = [{ Author: "Ashneer Grover", title: "Doglapan", imgLink: "https://productimages.worldofbooks.com/067009711X.jpg" },{Author: "Code Academy", title: "Game Development", imgLink: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSh-PiET88eL7uhDWzzjmczgdiLbZiCeiL6Ax1kxDIi7quldpU5qDj7X_i1uApUqIJPDtBWui1s_4pp9noNk_g2S3483CQyKlwRfsqzIP0HHksUKbGyF8GvzA&usqp=CAE"}, { Author: "Ashneer Grover", title: "Doglapan", imgLink: "https://productimages.worldofbooks.com/067009711X.jpg" },{Author: "Code Academy", title: "Game Development", imgLink: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSh-PiET88eL7uhDWzzjmczgdiLbZiCeiL6Ax1kxDIi7quldpU5qDj7X_i1uApUqIJPDtBWui1s_4pp9noNk_g2S3483CQyKlwRfsqzIP0HHksUKbGyF8GvzA&usqp=CAE" }, { Author: "Ashneer Grover", title: "Doglapan", imgLink: "https://productimages.worldofbooks.com/067009711X.jpg" },{Author: "Code Academy", title: "Game Development", imgLink: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSh-PiET88eL7uhDWzzjmczgdiLbZiCeiL6Ax1kxDIi7quldpU5qDj7X_i1uApUqIJPDtBWui1s_4pp9noNk_g2S3483CQyKlwRfsqzIP0HHksUKbGyF8GvzA&usqp=CAE" }];
  
  return (
    <div>
    {
      books.map((a,index)=>(
        <Book data={a} key={index}/>
      ))
    }
      
      {/* <Book {...book1} /> */}
    </div>
  )
}

export default BookStore