import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      {resources.map(r => {
        return <li key={r.id}>{r.title}</li>;
      })}
    </div>
  );
};

export default ResourceList;
