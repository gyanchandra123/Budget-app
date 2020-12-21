//BUDGET CONTROLLER- : DataModule
var budgetController = (function () {

    // constructor for any expense or income:
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }

    // calculating percentage for each expenses w.r.t Total income

    Expense.prototype.calcPercentage = function (totalIncome) {

        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }

    }


    // returning the calculated percentage for each expenses:
    Expense.prototype.getPercentage = function () {
        return this.percentage;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }





    //creating data structure to recieve all the income and expenses 
    var data = {
        allItems: {
            exp: [],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            inc: []
        },

        total: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };


    //calculating the total income and the expenses:
    var totalIncomeORexpense = function (type) {

        var sum = 0;

        data.allItems[type].forEach(function (eachExOrInc) {
            sum += eachExOrInc.value;
        });

        data.total[type] = sum;
    }


    //adding new items into the budget controller:-
    return {

        //A. store the input income or expense data to data structure
        addItem: function (type, desc, val) {

            var newItemId, newItem;

            //1.calculate the ID of each new item to be added
            if (data.allItems[type].length > 0) {

                newItemId = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            else {
                newItemId = 0;
            }

            //2.add the new item to either income[] or expense []
            if (type === 'inc') {
                newItem = new Income(newItemId, desc, val)
            } else if (type === 'exp') {
                newItem = new Expense(newItemId, desc, val)
            }
            data.allItems[type].push(newItem);

            //3. return the inc[] or the exp[], to be accessible from outside
            return newItem;
        },



        //B.returning netBudget,totalInc, totalExp, percentage
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.total.inc,
                totalExp: data.total.exp,
                percentage: data.percentage

            }
        },


        //C.just for testing
        testing: function () {
            return data;
        },


        //D.calculate the BUDGET :
        calculateBudget: function () {

            //1. calculate the total incomes and total expenses:
            totalIncomeORexpense('inc');
            totalIncomeORexpense('exp');

            //2. calculate the Budget: income -expense
            data.budget = data.total.inc - data.total.exp;


            //3. calculate the percentage of the total expense we spent w.r.t. total income
            if (data.total.inc > 0) {
                data.percentage = Math.round((data.total.exp / data.total.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },


        //E. delete item from the data structure
        deleteItem: function (type, id) {

            var ids, index;

            ids = data.allItems[type].map(function (currentItem) {
                return currentItem.id
            });

            index = ids.indexOf(id);

            /* foundItem = data.allItems[type].find(eachItem => eachItem.id === id)

            index = data.allItems[type].findIndex(() => foundItem) */

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        //F.  expossing calculated percenatge for each expenses:

        //F1:adding the calculated percenatge to each expenses object    

        calculatePercenatges: function () {
            data.allItems.exp.forEach(function (eachExpense) {
                eachExpense.calcPercentage(data.total.inc);
            })
        },

        //F2: return the calculated percenatge:
        getPercentages: function () {
            var allPercentages = data.allItems.exp.map(function (currrent) {
                return currrent.getPercentage();
            });

            return allPercentages;
        },



        //G. sending data to the local storage:      
        getAllData: function () {
            return {
                expenditure_details: data.allItems.exp,
                income_details: data.allItems.inc,

                total_expenditure: this.getBudget().totalExp,
                total_income: this.getBudget().totalInc,

                final_budget: this.getBudget().budget,
                percentage: this.getBudget().percentage

            }
        }
    }
})();



/* ----------------------------------UI CONTROLLER: UI module------------------------------------------------ */

var UIController = (function () {

    //input  elements class names:-
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensePercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month',
        savingData: '.save__button',
        printDataBtn: '.printDataBtn'
    }


    //I .formatting the number to be display:
    var formatNumber = function (type, num) {
        /* 
            1. + or - before the number
            2. exactly 2 decimal points
            3. comma separating the 1000
            4. example : 23450 -> + 23,450.00
        */

        var int, dec, type;

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.')

        int = numSplit[0];
        dec = numSplit[1];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3)
        }
        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
    }



    // creating our own forEach method for iterating Object type:
    var nodeListForEach = function (list, callBackFunc) {
        for (let i = 0; i < list.length; i++) {
            callBackFunc(list[i], i)
        }
    }



    return {   // simply exposing

        //A. getting the whole 3 value as a single value
        getInput: function () {
            return {

                type: document.querySelector(DOMStrings.inputType).value, //inc or exp

                description: document.querySelector(DOMStrings.inputDescription).value,

                value: parseFloat(document.querySelector(DOMStrings.inputValue).value),

            }
        },

        getDOMStrings: function () {
            return DOMStrings;
        },


        //B. UPDATING EACH income or expense to the to THE UI
        addItem: function (incomeOrExpenseData, type) {

            var incomeOrExpenseHTML, newHTML, element;

            // pick the original html for income and expense:
            if (type === 'inc') {

                element = DOMStrings.incomeContainer;

                incomeOrExpenseHTML = `
                <div class="item clearfix" id="inc-%id%">
                <div class="item__description">%description%</div>
                <div class="right clearfix">
                    <div class="item__value"> %value%</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
                `
            }
            else if (type === 'exp') {

                element = DOMStrings.expenseContainer;

                incomeOrExpenseHTML = `
                <div class="item clearfix" id="exp-%id%">
                <div class="item__description">%description%</div>
                <div class="right clearfix">
                    <div class="item__value"> %value%</div>
                    <div class="item__percentage">%percentage%</div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
                `

            }

            //C. replace the html placeHolder with the actual data of the income or Expense object:
            newHTML = incomeOrExpenseHTML.replace('%id%', incomeOrExpenseData.id);
            newHTML = newHTML.replace('%description%', incomeOrExpenseData.description);
            newHTML = newHTML.replace('%value%', formatNumber(type, incomeOrExpenseData.value));



            //D. update the UI for the expense and the income on the either UI side:
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

        },

        //E. clearing the input description fill and the input value fill:
        clearFields: function () {

            var fields, fieldArray;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue);


            // fieldArray = [Array.prototype.slice.call(fields)];// converting list to the array object
            fieldArray = [...fields]; //: ES6

            fieldArray.forEach(function (current, index, array) {
                current.value = '';
            });

            fieldArray[0].focus();


        },

        //F.  15.updating the calculated budget value to the TopUI portion:
        /* 
                budget: data.budget,
                totalInc: data.total.inc,
                totalExp: data.total.exp,
                percentage: data.percentage
        */
        displayBudget: function (budgetObj) {

            var type;

            budgetObj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(type, budgetObj.budget);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber('inc', budgetObj.totalInc);
            document.querySelector(DOMStrings.expenseLabel).textContent = formatNumber('exp', budgetObj.totalExp);

            /* to properly display the percentages value w.r.t income and the expense */
            if (budgetObj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = budgetObj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---'
            }
        },

        //G.  deleting the items from the UI:

        deleteListItems: function (selectorID) {
            var elementToDelete = document.getElementById(selectorID);
            elementToDelete.parentNode.removeChild(elementToDelete);
        },


        // H. adding calculated percenatge value to each expenses in the expenses DOM: 
        displayPercentages: function (AllExpensePercentages) {

            var expensesFields = document.querySelectorAll(DOMStrings.expensePercentageLabel);

            // creating our own forEach method for iterating Object type:
              var nodeListForEach = function (list, callBackFunc) {
                  for (let i = 0; i < list.length; i++) {
                      callBackFunc(list[i], i)
                  }
              }

            nodeListForEach(expensesFields, function (current, index) {

                if (AllExpensePercentages[index] > 0) {
                    current.textContent = AllExpensePercentages[index] + '%';
                } else {
                    current.textContent = '---'
                }

            })
        },



        //J . display project Year:
        displayMonth: function () {

            var now, year, month, months;

            months = ['January', 'Febraury', 'March', "April", 'May', 'June', 'July', 'August', 'September', 'October',
                'November', 'December'];

            now = new Date();
            year = now.getFullYear();
            month = now.getMonth();
            document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year;

        },

        //K .applying different border color for the income and expense input type:
        changeType: function () {
            
            var fields = document.querySelectorAll(
                DOMStrings.inputType + ',' +
                DOMStrings.inputDescription + ',' +
                DOMStrings.inputValue
            );

            nodeListForEach(fields, function (current) {
                current.classList.toggle('red-focus')
            });

            document.querySelector(DOMStrings.inputBtn).classList.toggle('red');

        },


        //saving data in local Storage:
        saving: function (newItem) {

            localStorage.setItem('Data', JSON.stringify([{ 'Data': newItem }, { 'Time ': new Date() }]));


        }

    }

})();





/* -------------------------------MAIN CONTROLLER: controller Module-------------------------------------------------- */


var controller = (function (budgetCtrl, UIctrl) {

    var DOMClassNames, budget, input;

    // A. For the enter key press or the click event
    var setUpEventListener = function () {

        DOMClassNames = UIctrl.getDOMStrings();

        document.querySelector(DOMClassNames.inputBtn).addEventListener('click', ctrlAddItem); // this is for the click event

        document.addEventListener('keypress', function (event) {          // this is for the enter key press event

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });

        //B. delete event handling :
        document.querySelector(DOMClassNames.container).addEventListener('click', ctrlDeleteItem);

        //C. display different border colors for both the input separate for income && expense  
        document.querySelector(DOMClassNames.inputType).addEventListener('change', UIctrl.changeType)
    }


    //C. update Total budget to the Top UI part:
    var updateBudget = function () {

        //1. calculate the budget
        budgetCtrl.calculateBudget();

        //2.return the budget
        budget = budgetCtrl.getBudget();

        //3. update the total budget to the UI
        UIctrl.displayBudget(budget);
    }


    //D. DELETE: event handling implementation:
    var ctrlDeleteItem = function (event) { 

        var itemID, splitID, type, id;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0];
            id = parseInt(splitID[1]);


            //1. delete the item from the data structure:
            budgetCtrl.deleteItem(type, id);


            //2.delete the items from the UI
            UIctrl.deleteListItems(itemID);

            //3.update the total inc , exp, budget
            updateBudget();

            //4. update total expenses percentage
            updatePercentages();
        }


    }



    //E. shortcut/common click or enter event handling function's implementation for taking the user input values
    var ctrlAddItem = function () {

        var newItem;

        //1. get the data from the input fills 
        input = UIctrl.getInput();

        console.log(input);

        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {

            //2. add the items to the budget controller to its data structre
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. add the item to the UI after addding the item to the data structure
            UIctrl.addItem(newItem, input.type);

            //4. clear the input fills :
            UIctrl.clearFields();

            //5.calculate and  update the budget to the UI.
            updateBudget();

            //6. calculate and update percenatges:-
            updatePercentages();

        }
    };


    //F. recalculating the percentage both for each expenses  

    var updatePercentages = function () {

        //1. calculate the percentage 
        budgetCtrl.calculatePercenatges()

        //2. retrieve the percentage from the BudgetCotroller
        var percentages = budgetCtrl.getPercentages();

        console.log(percentages)

        //3. update the % in the UI.
        UIctrl.displayPercentages(percentages)

    }



    //G. saving data in the local storage:     
    function savingInLocalStorage() {


        //1.get all the calaculated data from the BudgetController:
        let sendDataToLocalStorage = budgetCtrl.getAllData();

        //2.send data to UIcontroller for storing it in local storage:
        document.querySelector(DOMClassNames.savingData).addEventListener('click', () => {

            //update the data to be sent:
            if (input && input.description !== '' && !isNaN(input.value) && input.value > 0) {

                sendDataToLocalStorage.total_income = budget.totalInc;
                sendDataToLocalStorage.total_expenditure = budget.totalExp
                sendDataToLocalStorage.final_budget = budget.budget;
                sendDataToLocalStorage.percentage = budget.percentage;

                UIctrl.saving(sendDataToLocalStorage);
            }
        })

    }

    function printDataInPdf() {
        document.querySelector(DOMClassNames.printDataBtn).addEventListener('click', () => {

            // document.querySelector('body').style.display = "none";

            var objFra = document.getElementById('myFrame');
            objFra.contentWindow.focus();
            objFra.contentWindow.print();

        })
    }


    //H. exposing a function that will invoke the enter key press event or the click event on pageLoad:
    return {

        init: function () {

            UIctrl.displayMonth();

            UIctrl.displayBudget(
                  {
                    budget: 0,
                    totalInc: 0,
                    totalExp: 0,
                    percentage: -1
    
                }
            ); 
          
            
            /* document.querySelector(UIctrl.getDOMStrings().budgetLabel).textContent = 0;
            document.querySelector(UIctrl.getDOMStrings().incomeLabel).textContent = 0;
            document.querySelector(UIctrl.getDOMStrings().expenseLabel).textContent = 0;
            document.querySelector(UIctrl.getDOMStrings().percentageLabel).textContent = '---' */

            setUpEventListener();
            savingInLocalStorage();
            printDataInPdf();
        }

    }




})(budgetController, UIController);

//calling the initial key pressed or the enter button  function
controller.init();

//saving and printing data :







