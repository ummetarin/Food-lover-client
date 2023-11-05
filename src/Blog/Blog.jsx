import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Nav from '../nav/Nav';
import NavBlog from '../nav/NavBlog';

const Blog = () => {
    return (


        <div className=''>
            <div>
                <NavBlog></NavBlog>
            </div>
            <div>
                <Nav></Nav>
            </div>
        <div className='flex md:flex-row flex-col justify-center gap-4'>
        <h1 className=' mt-16 mb-12 text-5xl text-center font-bold  text-lime-950'>BLOG PAGE</h1>
        <img className=' h-36 ' src="https://i.ibb.co/5YnVX1J/foo22-removebg-preview.png" alt="" />           
        </div>
   
<Tabs>
<TabList className='text-2xl text-orange-600 font-bold md:ml-[500px] ml-[100px]'>
 <Tab>Question One</Tab>
 <Tab>Question Two</Tab>
 <Tab>Question Three</Tab>
</TabList>

<TabPanel>
<div>
    
   <div className='mb-36 mt-24'>
   
     <div className='flex md:flex-row flex-col justify-center  md:gap-36 gap:24  font-bold '>
       <div className='md:mx-1 mx-auto '>
           <h1 className='text-4xl text-blue-950' >What Is One Way To Data Binding?</h1>
       </div>
       <div className='text-orange-700'>
          <p className='text-center'>One-way data binding in Angular is a way to bind data from the component</p>
          <p className='text-center'> to the view  or vice versa - from view to the component. </p>
          <p className='text-center'>It is used to display information to the end-user </p>
          <p className='text-center'>which automatically stays synchronized with each change of the underlying data</p>
       </div>
     </div>
   </div>
   <div>

   </div>
</div>
</TabPanel>

<TabPanel>
<div>
   <div className='mb-36 mt-24'>
 
     <div className='flex md:flex-row flex-col justify-center  md:gap-36 gap:24  font-bold'>
       <div className='md:mx-1 mx-auto '>
       <h1 className='text-4xl text-blue-950' >What Is NPM in Node Js?</h1>
       </div>
       <div className='text-orange-700 '>
          <p className='text-center'>The name npm (Node Package Manager) stems from when npm</p>
          <p className='text-center'>first was created as a package manager for Node.js. </p>
          <p className='text-center'>All npm packages are defined in files called package ...</p>

       </div>
     </div>
   </div>
   <div>

   </div>
</div>
</TabPanel>
<TabPanel>
<div className='mb-36 mt-24'>
    
     <div className='flex md:flex-row flex-col justify-center md:gap-36 gap:24 font-bold'>
       <div className='md:mx-1 mx-auto '>
       <h1 className='text-4xl text-blue-950' >Differents between Mongodb database</h1>
       <h1  className='text-4xl text-blue-950'> and my SQL database?</h1>
       </div>
       <div className='text-orange-700 '>
          <p className='text-center'>MySQL is a relational database system that </p>
          <p className='text-center'>stores data in a structured tabular format</p>
          <p className='text-center'> In contrast, MongoDB stores data as JSON documents</p>
          <p className='text-center'>in a more flexible format. Both offer performance and scalability,</p>
          <p className='text-center'>but they give better performance for different use cases.</p>
       </div>
     </div>
   </div>
</TabPanel>
</Tabs>
   </div>
    );
};

export default Blog;