# Harmless Ransom Note Algorithm

Takes a note and a magazine as a string and checks if it is possible to cut out the words from the magazine to make the note.

## Example

Text Note - "This is a note with a note." </br>
Magazine - "This is a long text, but only contains note once, with Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptas voluptate molestiae veritatis, facilis corrupti. Quod accusamus reiciendis repellat totam." </br>
This should fail since note only appears once. </br> </br>

With this magazine it should return true: </br>
Magazine - "This is a long text note, but contains note twice, with Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptas voluptate molestiae veritatis, facilis corrupti. Quod accusamus reiciendis repellat totam."
