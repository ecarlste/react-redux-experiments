import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return (
    <div>
      {resources.map(r => {
        return <li key={r.id}>{r.title}</li>;
      })}
    </div>
  );
};

export default ResourceList;
