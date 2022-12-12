import React, { Component } from 'react'
import {View,StyleSheet} from 'react-native';
import {Calendar,CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일','월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

class Calendars extends Component {

  render() {
     return (
      <View style={{ paddingTop: 100, flex: 1 }}>
        <Calendar
        // Initially visible month. Default = Date()
        current={'2022-12-13'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-12-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2022-12-31'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {console.log('selected day', day)}}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {console.log('selected day', day)}}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy년 MM월'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={(direction) => (<Arrow/>)}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
        disableArrowLeft={true}
        // Disable right arrow. Default = false
        disableArrowRight={true}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
        // renderHeader={(date) => {/*Return JSX*/}}
        enableSwipeMonths={true}
        markingType={'custom'}
        markedDates={{
          '2022-12-13': {
            customStyles: {
              container: {
                backgroundColor: 'red'
              },
              text: {
                color: 'black',
                fontWeight: '30'
              }
            }
          },
          '2022-12-14': {
            customStyles: {
              container: {
                backgroundColor: 'gray',
                // elevation: 100
              },
              text: {
                color: 'black',
                fontWeight:'30'
              }
            }
          },
          '2022-12-15': {
            customStyles: {
              container:{
                backgroundColor: 'yellow',
              },
              text: {
                color: 'black',
                fontWeight:'30'
              }
            }
          }
        }}
        theme={{
          'stylesheet.calendar.header': {
            dayTextAtIndex6: {
              color: 'red'
            },
            dayTextAtIndex5: {
              color: 'blue'
            }
          }
        }}
        />
      </View>
     )
   }
 }

export default Calendars;