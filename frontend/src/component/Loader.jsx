import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className='d-flex justify-content-center align-items-center p-5'>
            <Spinner animation="border" variant="success" />
        </div>
    );
};

export default Loader;