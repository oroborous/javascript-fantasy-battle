let selectedCharacter;
let selectedItem;

$(document).ready(function () {
    $(".characters img").click(chooseCharacter);
    $(".items img").click(chooseItem);
    $("button").click(battle);


    function battle() {
        // The variable contains undefined!
        if (!selectedCharacter) {
            $("#result").text("Choose a character first!");
            // exit the function
            return;
        }

        // Only the mage can use the charm
        if (selectedItem === "charm" && selectedCharacter !== "mage") {
            $("#result").text("Only the mage may use the magic charm!");
            // exit the function
            return;
        }

        //
        if (selectedCharacter === "archer" || selectedCharacter === "rogue") {
            if (selectedItem === "ring") {
                $("#result").text("The ring grants extra power to your weapon");
            } else {
                $("#result").text("Your attack was sufficient");
            }
        } else if (selectedCharacter === "mage") {
            switch (selectedItem) {
                case "ring":
                    $("#result").text("Your spell gains power from the ring");
                    break;
                case "charm":
                    $("#result").text("You draw immense power from the charm!");
                    break;
                default:
                    $("#result").text("Your spell was sufficient");
                    break;
            }
        }

        let dodgeChance = 0.50;
        let opponentRoll = Math.random();
        console.log(`Opponent rolled ${opponentRoll}`);

        // let opponentAction;
        // if (opponentRoll < dodgeChance) {
        //     opponentAction = "dodges";
        // }
        // else {
        //     opponentAction = "is hit";
        // }

        // Rewritten using conditional operator
        let opponentAction = (opponentRoll < dodgeChance) ? "dodges" : "is hit";

        $("#opponent").text(`Your opponent ${opponentAction}`);
    }

    function chooseCharacter() {
        // remove the "selected" class from all <h2> elements
        // that are children of the <div class="characters">
        $(".characters h2").removeClass("selected");

        // Find the selected <img> element's ID
        // "rogue", "mage", "archer"
        selectedCharacter = this.id;

        // Combine the ID with <h2> selector to find
        // the <h2> with matching class
        $("h2." + selectedCharacter).addClass("selected");
    }

    function chooseItem() {
        // remove the "selected" class from all <h2> elements
        // that are children of the <div class="items">
        $(".items h2").removeClass("selected");

        // Find the selected <img> element's ID
        // "ring", "charm"
        selectedItem = this.id;

        // Combine the ID with <h2> selector to find
        // the <h2> with matching class
        $("h2." + selectedItem).addClass("selected");
    }
});