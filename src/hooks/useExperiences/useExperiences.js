import { useEffect, useState } from "react";

const useExperinces = () => {
    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        fetch('experiences.json')
            .then(res => res.json())
            .then(data => setExperiences(data));
    }, [])
    return [experiences, setExperiences];
}

export default useExperinces;