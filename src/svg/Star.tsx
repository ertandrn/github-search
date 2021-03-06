import React from 'react';

function Star(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
            <path fill="#24292E" fill-rule="evenodd" d="M12 .25c.286 0 .546.162.672.418l3.059 6.197 6.838.994c.283.04.518.239.606.51.088.272.014.57-.19.769l-4.948 4.823 1.168 6.811c.048.282-.068.566-.298.734-.232.168-.538.19-.79.057L12 18.347l-6.117 3.216c-.252.133-.559.11-.79-.057-.23-.168-.346-.452-.298-.734l1.168-6.81-4.948-4.824c-.205-.2-.278-.497-.19-.769.088-.271.323-.47.606-.51l6.838-.994L11.327.668c.127-.256.387-.418.673-.418zm0 2.445L9.44 7.882c-.11.222-.32.375-.565.41l-5.725.832 4.143 4.038c.176.173.257.421.215.664l-.978 5.702 5.121-2.692c.219-.115.48-.115.698 0l5.12 2.692-.977-5.702c-.042-.243.038-.491.215-.664l4.143-4.038-5.725-.831c-.244-.036-.456-.19-.565-.41L12 2.694z" clip-rule="evenodd" />
        </svg>
    );
}

export default Star;