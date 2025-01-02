/* eslint-disable */
"use strict";

var PgTablePropertiesToggle = function () {

    var initTest = function () {

        document.querySelectorAll('th').forEach(item => {

            item.addEventListener('mouseout', event => {
                try {
                    if (event.currentTarget.children[1] !== undefined) {
                        if (event.currentTarget.children[1].childNodes[0].classList.contains('pi-sort-alt'))
                            event.currentTarget.children[1].classList.add('hidecontent');
                        else
                            event.currentTarget.children[1].classList.remove('hidecontent');
                    }
                }
                catch (exception) {
                    console.error('Exception:' + exception.toString());
                }
            });

            item.addEventListener('mouseover', event => {
                try {
                    if (event.currentTarget.children[1] !== undefined) {
                        event.currentTarget.children[1].classList.remove('hidecontent');
                    }
                }
                catch (exception) {
                    console.error('Exception:' + exception.toString());
                }
            });

            item.addEventListener('click', event => {
                try {
                    if (event.currentTarget.children[1] !== undefined) {
                        document.querySelectorAll('p-sortIcon').forEach((item, Index) => document.querySelectorAll('p-sortIcon')[Index].classList.add('hidecontent'));
                        event.currentTarget.children[1].classList.remove('hidecontent');
                    }
                }
                catch (exception) {
                    console.error('Exception:' + exception.toString());
                }
            });


        });
    }

    return {
        init: function () {
            return initTest();
        }
    }

}

export default new PgTablePropertiesToggle();