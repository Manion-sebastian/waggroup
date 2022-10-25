// next imports
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'antd' //component

// component imports
import TestPage from '../components/testPage'

// helper imports
import type { ExpandedExample, BrandonExample } from '../typings' // this is a custom type created in typings that is set to match test class instance
import type { BrandonGame } from '../typingBrandon' // separate types for each person to limit git issues. 
import HomePage from '../components/homePage'
import MinesweeperGame from '../components/minesweeperGame'
import SudokuGame from '../components/Sudoku/sudokuGame'
import TetrisGame from '../components/tetris/tetrisGame'



// console.log('fuck you brandon')


// class fuckYou {
//   public static void main (String[] args) {
//     insult()
  
//   }
//   pubic static void insult {
//     System.out.print('fuck you brandon')
//   }

// }


// for props we are passing into components
type Props = {}

// an object created with a typescript type. 
let propTest : ExpandedExample = {
  id: 'car',
  createdAt: 'noon',
  title: 'john',
  complete: false,
  
}

// redudant way, infer is fine unless exporting. 
let newObject : {
  name: string,
  bestRubberDuck: boolean 
} = {
  name: 'brandon',
  bestRubberDuck: true

}

// if you know something is there but ts is throwing a fit hit it with !
// if you need to use types that interfere with a different import use "as ---- " when calling it. 

// NextPage is a typing for pages in ts next deleting it cause its not needed currently
// pass prop down here
const Home = ({} : Props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        {/* change for deployment */}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id='content'>
        <p>Parent Page</p>
        <Button type='primary'>Deez Nuts</Button>
        {/* type here refers to version from antd */}

        {/* testPage */}
        <TestPage test={propTest} />

        {/* games  */}
        <HomePage />

        <MinesweeperGame />

        <SudokuGame />

        <TetrisGame />      

      </section>

      <section id='linksToContent'>
        {/* this will show what games are not currently there */}
        <div>
          <p>Sudoku</p>
          <p>Minesweeper</p>
          <p>Tetris</p>
        </div>
      </section>


    </div>
  )
}

export default Home

// this allows us to query the backend on load to lessen the strain on loading time. (bit that broke me over the weekend.)
// export const getStaticProps: GetStaticProps<Props> = async () => {
  // return {
  //   props: {

  //   },
  //   revalidate: // when do we want it to check for an update
  // }

// }