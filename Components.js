
import ClayLink from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';
import ClayButton from '@clayui/button';
import React from 'react';
import { useState } from 'react';
import Blog from './Blog';
import Documents from './Documents';
import Know from './Know';


const Components = () => {
    const [active, setActive] = useState('');
    
    return (
        <>
            <ClayNavigationBar triggerLabel={active}>
			<ClayNavigationBar.Item active={active === 'Item 1'}>
				<ClayLink
					href="#"
					onClick={(event) => {
						event.preventDefault();
						setActive('Item 1');
					}}
				>
					Blogs
				</ClayLink>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item active={active === 'Item 2'}>
				<ClayButton
					onClick={() => setActive('Item 2')}
				>
					Documents and Media
				</ClayButton>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item active={active === 'Item 3'}>
				<ClayLink
					href="#"
					onClick={(event) => {
						event.preventDefault();
						setActive('Item 3');
					}}
				>
					Knowledge Base
				</ClayLink>
			</ClayNavigationBar.Item>
		</ClayNavigationBar>
            
            {/* Providing Conditional Statements */}
           {
            (active==='Item 1' && <Blog/> || active==='Item 2' && <Documents/> || active==='Item 3' && <Know/> || "Please click any one of the option")
           }
        </>

    );

}

export default Components
