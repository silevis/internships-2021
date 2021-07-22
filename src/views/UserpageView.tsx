import React from 'react';
import EditUserComponent from '../components/EditUserComponent';
import { useUser } from '../components/UserContext';
import { IProfile } from '../interfaces/IProfile.interface';

// guard urla
// pobieranie uid z jakiegos komponentu wyzej
// ostylowanie

const UserpageView = () => {
    const usr: IProfile | null = useUser();
    return (
      <div className="mt-4">
        {usr?.id}
        <EditUserComponent />
      </div>
    );
};

export default UserpageView;
