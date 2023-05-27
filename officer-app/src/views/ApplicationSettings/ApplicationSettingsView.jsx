import { useEffect, useState } from 'react'
import './ApplicationSettings.scss'
import ReviewersTable from './Components/ReviewersTable'
import userApi from '../../services/user-api'
import { Button, Modal } from 'react-bootstrap'
function ApplicationSettings() {
    const [selectedReviewers, setSelectedReviewers] = useState([])
    const [selectedIds, setSelectedIds] = useState([])
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const [reviewers, setReviewers] = useState([]);
    function handleClose(submit) {
        if(!submit) return setShow(false)
        const userIds = selectedReviewers.map((row)=>{
            return row.original._id
        }).join(',')
        updateReviewers(userIds, true)
        setShow(false)
    }
    async function updateReviewers(userIds, isReviewer){
        userApi.updateReviewers(userIds, isReviewer)
    }
    async function getData(){
        const data = await userApi.getReviewers()
        setReviewers(data);
        setSelectedIds(data.map((reviewer)=>{
            return reviewer._id
        }))
        setLoading(false);
    }
    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        // setReviewers(selectedReviewers)
    },[selectedReviewers])
    return (
        <div className="ApplicationSettings">
            {!loading && (
                <>
                <ul>
                    {reviewers.map((reviewer => {
                        return <li key={reviewer._id}>{reviewer.FullName}</li>
                    }))}
                </ul>
                </>
            )}
            <Button onClick={() => setShow(true)} >Edit reviewers</Button>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Assign reviewers
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReviewersTable setSelectedReviewers={setSelectedReviewers} actionBar={false}></ReviewersTable>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={()=>handleClose(false)}
                    >
                        Close
                    </Button>
                    <Button
                        form="group-form"
                        variant="primary"
                        onClick={(e) => { e.preventDefault(); handleClose(true) }}
                    >
                        Add selected
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ApplicationSettings