import { Tab, Tabs } from "react-bootstrap";
import {useState,useEffect} from 'react'
import Cards from '../components/Cards'
import Users from '../components/Users';
import Posts from '../components/Posts';
import { getData } from "../services/axios.service";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TabComp() {
    const [key, setKey] = useState('products');
    const [prod, setProd]=useState([])
    const [users, setUsers] = useState([]);
   const [posts, setPosts] = useState([]);
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
  
   const handleDeleteProduct = (e,id) =>{
    e.preventDefault()
    const filteredProducts = prod.filter((p) =>{
      return p.id !== id;
    })
    setProd(filteredProducts);
   }
   

   const handleEditProduct = (e,id) =>{
    e.preventDefault();
    setShow(true);
   }
   

   useEffect(()=>{
    getData(key).then((res)=>{
      if (key==='products'){
        setProd(res.data.products)
      }
        else if (key==='users') {
          setUsers(res.data.users)
        }
        else {
          setPosts(res.data.posts)
        }
    
       
      
//       setPosts(res.data.posts)
    })
   },[key])
  
    return (
      <> 
       <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="products" title="Product">
        <Cards prod={prod} 
        handleDeleteProduct={handleDeleteProduct}
        handleEditProduct = {handleEditProduct}/>
        </Tab>
        <Tab eventKey="users" title="Users">
          <Users users={users}/>
          
        </Tab>
        <Tab eventKey="posts" title="Posts" >
         <Posts posts={posts} />
        </Tab>
      </Tabs>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" class ="form-control" placeholder = "Title"></input>
          <input type="text" class ="form-control" placeholder = "Description"></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
     
    );
  }
  

export default TabComp;