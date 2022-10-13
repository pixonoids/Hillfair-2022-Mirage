import './Mediamodifier-Design.svg';
const Data = [
    {
        event: "Music Night",
        club: "Music Club",
        date: "Nov 1, 2022",
        tag: "Music",
        eventStatus: "Finished",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Mind Hunt",
        club: "Hermatica",
        date: "Nov 2, 2022",
        tag: "Mystery",
        eventStatus: "Ongoing",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Slice of Art",
        club: "Fine arts",
        date: "Nov 3, 2022",
        tag: "Art",
        eventStatus: "Coming",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Electro Blaze",
        club: "Ojas",
        date: "Nov 4, 2022",
        tag: "Test",
        eventStatus: "Coming",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Music Night",
        club: "Music Club",
        date: "Nov 1, 2022",
        tag: "Music",
        eventStatus: "Finished",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Mind Hunt",
        club: "Hermatica",
        date: "Nov 2, 2022",
        tag: "Mystery",
        eventStatus: "Ongoing",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Slice of Art",
        club: "Fine arts",
        date: "Nov 3, 2022",
        tag: "Art",
        eventStatus: "Coming",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Electro Blaze",
        club: "Ojas",
        date: "Nov 4, 2022",
        tag: "Test",
        eventStatus: "Coming",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Music Night",
        club: "Music Club",
        date: "Nov 1, 2022",
        tag: "Music",
        eventStatus: "Finished",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Mind Hunt",
        club: "Hermatica",
        date: "Nov 2, 2022",
        tag: "Mystery",
        eventStatus: "Ongoing",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Slice of Art",
        club: "Fine arts",
        date: "Nov 3, 2022",
        tag: "Art",
        eventStatus: "Coming",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Electro Blaze",
        club: "Ojas",
        date: "Nov 4, 2022",
        tag: "Test",
        eventStatus: "Coming",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Music Night",
        club: "Music Club",
        date: "Nov 1, 2022",
        tag: "Music",
        eventStatus: "Finished",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Mind Hunt",
        club: "Hermatica",
        date: "Nov 2, 2022",
        tag: "Mystery",
        eventStatus: "Ongoing",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Slice of Art",
        club: "Fine arts",
        date: "Nov 3, 2022",
        tag: "Art",
        eventStatus: "Coming",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },
    {
        event: "Electro Blaze",
        club: "Ojas",
        date: "Nov 4, 2022",
        tag: "Test",
        eventStatus: "Coming",
        moon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(241,196,14,1)" /></svg>
    },

]
export default Data;