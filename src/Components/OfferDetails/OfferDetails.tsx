import {FetchOfferDetails, OfferDetailsDto} from "./FetchOfferDetails";
import {useEffect, useState} from "react";
import React from 'react';
import Modal from 'react-modal';
import offerDetailsCss from "./offerDetailsModal.css";
import {Button, Paper} from "@mui/material";

interface OfferDetailsProps {
    offerId: string
}

export const OfferDetails = ({offerId}: OfferDetailsProps) => {

    const [offerDetails, setOfferDetails] = useState<OfferDetailsDto|null>(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        FetchOfferDetails(offerId).then(data => setOfferDetails(data));
    }, [offerId]);

    function openModal() {
        setIsOpen(true);
        /*todo add implementation*/
    }

    function afterOpenModal() {
        /*todo add implementation*/
    }

    function closeModal() {
        setIsOpen(false);
        /*todo add implementation*/
    }

    return (
        <div>
            <Paper elevation={3} >
                <Button variant='outlined' onClick={openModal}>Offer Details</Button>
            </Paper>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={offerDetailsCss}
                contentLabel="Offer details"
            >
                <h2>Offer details</h2>
                <button onClick={closeModal}>close</button>
                <div>Modal details</div>
            </Modal>
        </div>
    );

    // return (
    //     <div>
    //         <div className='offer-details'>OfferDetails</div>
    //         {offerDetails ? <div className='content'>
    //             <ul>
    //                 <li>{offerDetails.id}</li>
    //                 <li>{offerDetails.title}</li>
    //                 <li>{offerDetails.url}</li>
    //             </ul>
    //         </div> : null}
    //     </div>
    // )
}