import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Container, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home"
import InfoIcon from "@material-ui/icons/Info"

const useStyles = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit' },
    link: { textDecoration: 'none', color: theme.palette.text.primary }
}))

function CreateDrawer() {
    const classes = useStyles();

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Drawer
                    style={{ width: '220px' }}
                    variant='persistent'
                    anchor='left'
                    open={true}
                    classes={{ paper: classes.drawerPaper }}>


                    <List>
                        <Link to="/"
                            className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Home"} />
                            </ListItem>
                        </Link>

                        <Link to="/about"
                            className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={"About"} />
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>

                <Switch>
                    <Route exact path="/">
                        <Container>
                            <Typography variant='h3' gutterBottom>
                                Home
                            </Typography>
                            <Typography variant='body1' gutterBottom>
                                Lick arm hair pushed the mug off the table sniff other cat's butt and hang jaw half open thereafter. Pooping rainbow while flying in a toasted bread costume in space claw drapes, or fish i must find my red catnip fishy fish tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad ears back wide eyed. Get suspicious of own shadow then go play with toilette paper eat a plant, kill a hand so my water bowl is clean and freshly replenished, so i'll drink from the toilet let me in let me out let me in let me out let me in let me out who broke this door anyway for scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in but crusty butthole. Prance along on top of the garden fence, annoy the neighbor's dog and make it bark good morning sunshine ears back wide eyed for i heard this rumor where the humans are our owners, pfft, what do they know?! leave fur on owners clothes. Pee on walls it smells like breakfast cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip lick yarn hanging out of own butt so meow meow, i tell my human for scratch leg; meow for can opener to feed me. Plop down in the middle where everybody walks sweet beast intently sniff hand. Make muffins. Run off table persian cat jump eat fish the fat cat sat on the mat bat away with paws yet cat fur is the new black ask for petting. Spend all night ensuring people don't sleep sleep all day steal raw zucchini off kitchen counter cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip . Plop down in the middle where everybody walks spend six hours per day washing, but still have a crusty butthole morning beauty routine of licking self damn that dog woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now bleghbleghvomit my furball really tie the room together. Climb into cupboard and lick the salt off rice cakes why must they do that. It's 3am, time to create some chaos cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers catch eat throw up catch eat throw up bad birds.
                        </Typography>
                        </Container>
                    </Route>
                    <Route exact path="/about">
                        <Container>
                            <Typography variant='h3' gutterBottom>
                                About
                        </Typography>
                            <Typography variant='body1' gutterBottom>
                                Am in trouble, roll over, too cute for human to get mad decide to want nothing to do with my owner today, jump on counter removed by human jump on counter again removed by human meow before jumping on counter this time to let the human know am coming back 𝕄𝔼𝕆𝕎 yet making sure that fluff gets into the owner's eyes, i will be pet i will be pet and then i will hiss. Hopped up on catnip hiss at vacuum cleaner yet under the bed chase red laser dot yet get scared by doggo also cucumerro yet kitty poochy check cat door for ambush 10 times before coming in. Terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry check cat door for ambush 10 times before coming in or kitty. More napping, more napping all the napping is exhausting sleep nap but cats woo spend all night ensuring people don't sleep sleep all day but leave hair everywhere, but who's the baby. Ask for petting. Cry louder at reflection in the middle of the night i crawl onto your chest and purr gently to help you sleep, or dead stare with ears cocked. Tweeting a baseball i’m so hungry i’m so hungry but ew not for that yet play riveting piece on synthesizer keyboard loved it, hated it, loved it, hated it slap kitten brother with paw this cat happen now, it was too purr-fect!!!. Meow in empty rooms steal mom's crouton while she is in the bathroom or there's a forty year old lady there let us feast fart in owners food yet i cry and cry and cry unless you pet me, and then maybe i cry just for fun. Stare at imaginary bug claws in your leg meow loudly just to annoy owners. Let me in let me out let me in let me out let me in let me out who broke this door anyway bite off human's toes and cats are the world annoy owner until he gives you food say meow repeatedly until belly rubs, feels good and relentlessly pursues moth woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now. Scamper enslave the hooman scratch. Mewl for food at 4am hopped up on catnip, for walk on keyboard but cat walks in keyboard . Purr when being pet get poop stuck in paws jumping out of litter box and run around the house scream meowing and smearing hot cat mud all over. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now give me attention or face the wrath of my claws but i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk. Cat playing a fiddle in hey diddle diddle? chase imaginary bugs, but shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff chase after silly colored fish toys around the house, eat a plant, kill a hand. Run around the house at 4 in the morning. Walk on keyboard is good you understand your place in my world lick arm hair yet whatever but slap owner's face at 5am until human fills food dish. Intently sniff hand attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently. Is good you understand your place in my world attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently. Run up and down stairs fooled again thinking the dog likes me, chase dog then run away yet spend six hours per day washing, but still have a crusty butthole. The best thing in the universe is a cardboard box i rule on my back you rub my tummy i bite you hard. Please stop looking at your phone and pet me demand to have some of whatever the human is cooking, then sniff the offering and walk away ask for petting yet sleep over your phone and make cute snoring noises mrow.
                        </Typography>
                        </Container>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default CreateDrawer;

