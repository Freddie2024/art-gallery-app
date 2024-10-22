import { render } from "@testing-library/react";
import Spotlight from ".";

test('renders image and artist', () => {
   
    const { getByAltText, getByText } = render(
    <Spotlight 
        image="https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg" 
        artist="dilara irem"
    />);
    
    const image = getByAltText('Spotlight: dilara irem');
    expect(image).toBeInTheDocument(); 
  
    expect(getByText('dilara irem')).toBeInTheDocument()
});


