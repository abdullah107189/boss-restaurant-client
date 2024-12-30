import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/menus')
            .then(res => setMenu(res.data))
    }, [])
    return [menu]
};

export default useMenu;