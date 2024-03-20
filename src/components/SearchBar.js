import { useState } from "react"
import { Button, Form } from "react-bootstrap";



const SearchBar=({onSearch})=>{
    const [searchTerm,setSearchTerm]=useState('');

    const handleSubmit=(event)=>{
            event.preventDefault();
            onSearch(searchTerm);
    }

    const handleChange=(event)=>{
        setSearchTerm(event.target.value);

    }

    return(
        <div className="container-fluid" style={{ paddingTop: '20px' }} >
        <Form onSubmit={handleSubmit}>
            <Form.Control variant='dark' size="lg" type="text" placeholder="Search Your Movie Here" value={searchTerm}  onChange={handleChange} />
            <p style={{ paddingTop: '5px' }}></p>
            <Button size="lg" variant="dark" type="submit"  >Search</Button>
        </Form>
        </div>
    )
}

export default SearchBar;