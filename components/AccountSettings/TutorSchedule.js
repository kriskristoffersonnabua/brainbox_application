import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {insertTutorSchedule, parseTutorSchedule} from '../../lib/converter';
import {String} from '../reusables';
// import {connect} from 'react-redux';
// import Actions from '../../actions';
// const {getTutorSched} = Actions;

class TutorSchedule extends Component {
  constructor(props) {
    super(props);
    let a =
      (props.schedule && props.schedule.a) ||
      '8am-9am:false:false:false:false:false:false:false';
    let b =
      (props.schedule && props.schedule.b) ||
      '9am-10am:false:false:false:false:false:false:false';
    let c =
      (props.schedule && props.schedule.c) ||
      '10am-11am:false:false:false:false:false:false:false';
    let d =
      (props.schedule && props.schedule.d) ||
      '11am-12pm:false:false:false:false:false:false:false';
    let e =
      (props.schedule && props.schedule.e) ||
      '12pm-1pm:false:false:false:false:false:false:false';
    let f =
      (props.schedule && props.schedule.f) ||
      '1pm-2pm:false:false:false:false:false:false:false';
    let g =
      (props.schedule && props.schedule.g) ||
      '2pm-3pm:false:false:false:false:false:false:false';
    let h =
      (props.schedule && props.schedule.h) ||
      '3pm-4pm:false:false:false:false:false:false:false';
    let i =
      (props.schedule && props.schedule.i) ||
      '4pm-5pm:false:false:false:false:false:false:false';
    let j =
      (props.schedule && props.schedule.j) ||
      '5pm-6pm:false:false:false:false:false:false:false';
    let k =
      (props.schedule && props.schedule.k) ||
      '6pm-7pm:false:false:false:false:false:false:false';
    let l =
      (props.schedule && props.schedule.l) ||
      '7pm-8pm:false:false:false:false:false:false:false';
    let m =
      (props.schedule && props.schedule.m) ||
      '8pm-9pm:false:false:false:false:false:false:false';
    let n =
      (props.schedule && props.schedule.n) ||
      '9pm-10pm:false:false:false:false:false:false:false';
    let o =
      (props.schedule && props.schedule.o) ||
      '10pm-11am:false:false:false:false:false:false:false';
    this.state = {
      a,
      aSchedule: parseTutorSchedule(a),
      b,
      bSchedule: parseTutorSchedule(b),
      c,
      cSchedule: parseTutorSchedule(c),
      d,
      dSchedule: parseTutorSchedule(d),
      e,
      eSchedule: parseTutorSchedule(e),
      f,
      fSchedule: parseTutorSchedule(f),
      g,
      gSchedule: parseTutorSchedule(g),
      h,
      hSchedule: parseTutorSchedule(h),
      i,
      iSchedule: parseTutorSchedule(i),
      j,
      jSchedule: parseTutorSchedule(j),
      k,
      kSchedule: parseTutorSchedule(k),
      l,
      lSchedule: parseTutorSchedule(l),
      m,
      mSchedule: parseTutorSchedule(m),
      n,
      nSchedule: parseTutorSchedule(n),
      o,
      oSchedule: parseTutorSchedule(o),
    };
  }
  componentWillMount() {
    // this.props.getTutorSched();
  }
  componentWillReceiveProps(nextProps) {
    const {schedule, tutorSchedule} = nextProps;
    console.log('receiviingprosp');
    console.log(this.props);
    if (schedule != undefined && schedule != null && schedule.a != undefined) {
      const {a, b, c, d, e, f, g, h, i, j, k, l, m, n, o} = schedule;
      this.setState({
        a,
        aSchedule: parseTutorSchedule(a),
        b,
        bSchedule: parseTutorSchedule(b),
        c,
        cSchedule: parseTutorSchedule(c),
        d,
        dSchedule: parseTutorSchedule(d),
        e,
        eSchedule: parseTutorSchedule(e),
        f,
        fSchedule: parseTutorSchedule(f),
        g,
        gSchedule: parseTutorSchedule(g),
        h,
        hSchedule: parseTutorSchedule(h),
        i,
        iSchedule: parseTutorSchedule(i),
        j,
        jSchedule: parseTutorSchedule(j),
        k,
        kSchedule: parseTutorSchedule(k),
        l,
        lSchedule: parseTutorSchedule(l),
        m,
        mSchedule: parseTutorSchedule(m),
        n,
        nSchedule: parseTutorSchedule(n),
        o,
        oSchedule: parseTutorSchedule(o),
      });
    } else if (
      (tutorSchedule && tutorSchedule.length > 0, tutorSchedule != undefined)
    ) {
      this.setState({
        a: tutorSchedule[0],
        aSchedule: parseTutorSchedule(tutorSchedule[0]),
        b: tutorSchedule[1],
        bSchedule: parseTutorSchedule(tutorSchedule[1]),
        c: tutorSchedule[2],
        cSchedule: parseTutorSchedule(tutorSchedule[2]),
        e: tutorSchedule[3],
        eSchedule: parseTutorSchedule(tutorSchedule[3]),
        d: tutorSchedule[4],
        dSchedule: parseTutorSchedule(tutorSchedule[4]),
        f: tutorSchedule[5],
        fSchedule: parseTutorSchedule(tutorSchedule[5]),
        g: tutorSchedule[6],
        gSchedule: parseTutorSchedule(tutorSchedule[6]),
        h: tutorSchedule[7],
        hSchedule: parseTutorSchedule(tutorSchedule[7]),
        i: tutorSchedule[8],
        iSchedule: parseTutorSchedule(tutorSchedule[8]),
        j: tutorSchedule[9],
        jSchedule: parseTutorSchedule(tutorSchedule[9]),
        k: tutorSchedule[10],
        kSchedule: parseTutorSchedule(tutorSchedule[10]),
        l: tutorSchedule[11],
        lSchedule: parseTutorSchedule(tutorSchedule[11]),
        m: tutorSchedule[12],
        mSchedule: parseTutorSchedule(tutorSchedule[12]),
        n: tutorSchedule[13],
        nSchedule: parseTutorSchedule(tutorSchedule[13]),
        o: tutorSchedule[14],
        oSchedule: parseTutorSchedule(tutorSchedule[14]),
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <String text={' '} style={{flex: 1}} />
          <Text style={{flex: 2, textAlign: 'center'}}>Sun</Text>
          <Text style={{flex: 2, textAlign: 'center'}}>Mon</Text>
          <Text style={{flex: 2, textAlign: 'center'}}>Tue</Text>
          <Text style={{flex: 2, textAlign: 'center'}}>Wed</Text>
          <Text style={{flex: 2, textAlign: 'center'}}>Thu</Text>
          <Text style={{flex: 2, textAlign: 'center'}}>Fri</Text>
          <Text style={{flex: 2, textAlign: 'center'}}>Sat</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            8am
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.a,
                      !this.state.aSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        a: newSchedule,
                        aSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.aSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.a,
                      !this.state.aSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        a: newSchedule,
                        aSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.aSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.a,
                      !this.state.aSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        a: newSchedule,
                        aSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.aSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.a,
                      !this.state.aSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        a: newSchedule,
                        aSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.aSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.a,
                      !this.state.aSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        a: newSchedule,
                        aSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.aSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.a,
                      !this.state.aSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        a: newSchedule,
                        aSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.aSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.a,
                      !this.state.aSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        a: newSchedule,
                        aSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.aSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            9am
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.b,
                      !this.state.bSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        b: newSchedule,
                        bSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.bSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.b,
                      !this.state.bSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        b: newSchedule,
                        bSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.bSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.b,
                      !this.state.bSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        b: newSchedule,
                        bSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.bSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.b,
                      !this.state.bSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        b: newSchedule,
                        bSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.bSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.b,
                      !this.state.bSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        b: newSchedule,
                        bSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.bSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.b,
                      !this.state.bSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        b: newSchedule,
                        bSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.bSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.b,
                      !this.state.bSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        b: newSchedule,
                        bSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.bSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            10 am
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.c,
                      !this.state.cSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        c: newSchedule,
                        cSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.cSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.c,
                      !this.state.cSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        c: newSchedule,
                        cSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.cSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.c,
                      !this.state.cSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        c: newSchedule,
                        cSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.cSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.c,
                      !this.state.cSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        c: newSchedule,
                        cSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.cSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.c,
                      !this.state.cSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        c: newSchedule,
                        cSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.cSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.c,
                      !this.state.cSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        c: newSchedule,
                        cSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.cSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.c,
                      !this.state.cSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        c: newSchedule,
                        cSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.cSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            11 am
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.d,
                      !this.state.dSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        d: newSchedule,
                        dSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.dSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.d,
                      !this.state.dSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        d: newSchedule,
                        dSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.dSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.d,
                      !this.state.dSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        d: newSchedule,
                        dSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.dSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.d,
                      !this.state.dSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        d: newSchedule,
                        dSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.dSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.d,
                      !this.state.dSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        d: newSchedule,
                        dSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.dSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.d,
                      !this.state.dSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        d: newSchedule,
                        dSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.dSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.d,
                      !this.state.dSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        d: newSchedule,
                        dSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.dSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            12 pm
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.e,
                      !this.state.eSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        e: newSchedule,
                        eSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.eSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.e,
                      !this.state.eSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        e: newSchedule,
                        eSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.eSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.e,
                      !this.state.eSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        e: newSchedule,
                        eSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.eSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.e,
                      !this.state.eSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        e: newSchedule,
                        eSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.eSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.e,
                      !this.state.eSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        e: newSchedule,
                        eSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.eSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.e,
                      !this.state.eSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        e: newSchedule,
                        eSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.eSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.e,
                      !this.state.eSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        e: newSchedule,
                        eSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.eSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            1 pm
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.f,
                      !this.state.fSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        f: newSchedule,
                        fSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.fSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.f,
                      !this.state.fSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        f: newSchedule,
                        fSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.fSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.f,
                      !this.state.fSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        f: newSchedule,
                        fSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.fSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.f,
                      !this.state.fSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        f: newSchedule,
                        fSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.fSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.f,
                      !this.state.fSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        f: newSchedule,
                        fSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.fSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.f,
                      !this.state.fSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        f: newSchedule,
                        fSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.fSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.f,
                      !this.state.fSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        f: newSchedule,
                        fSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.fSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            2 pm
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.g,
                      !this.state.gSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        g: newSchedule,
                        gSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.gSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.g,
                      !this.state.gSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        g: newSchedule,
                        gSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.gSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.g,
                      !this.state.gSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        g: newSchedule,
                        gSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.gSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.g,
                      !this.state.gSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        g: newSchedule,
                        gSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.gSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.g,
                      !this.state.gSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        g: newSchedule,
                        gSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.gSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.g,
                      !this.state.gSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        g: newSchedule,
                        gSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.gSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.g,
                      !this.state.gSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        g: newSchedule,
                        gSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.gSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            3 pm
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.h,
                      !this.state.hSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        h: newSchedule,
                        hSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.hSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.h,
                      !this.state.hSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        h: newSchedule,
                        hSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.hSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.h,
                      !this.state.hSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        h: newSchedule,
                        hSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.hSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.h,
                      !this.state.hSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        h: newSchedule,
                        hSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.hSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.h,
                      !this.state.hSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        h: newSchedule,
                        hSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.hSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.h,
                      !this.state.hSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        h: newSchedule,
                        hSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.hSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.h,
                      !this.state.hSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        h: newSchedule,
                        hSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.hSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            4 pm
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.i,
                      !this.state.iSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        i: newSchedule,
                        iSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.iSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.i,
                      !this.state.iSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        i: newSchedule,
                        iSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.iSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.i,
                      !this.state.iSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        i: newSchedule,
                        iSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.iSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.i,
                      !this.state.iSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        i: newSchedule,
                        iSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.iSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.i,
                      !this.state.iSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        i: newSchedule,
                        iSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.iSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.i,
                      !this.state.iSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        i: newSchedule,
                        iSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.iSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.i,
                      !this.state.iSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        i: newSchedule,
                        iSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.iSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            5 pm
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.j,
                      !this.state.jSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        j: newSchedule,
                        jSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.jSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.j,
                      !this.state.jSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        j: newSchedule,
                        jSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.jSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.j,
                      !this.state.jSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        j: newSchedule,
                        jSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.jSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.j,
                      !this.state.jSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        j: newSchedule,
                        jSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.jSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.j,
                      !this.state.jSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        j: newSchedule,
                        jSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.jSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.j,
                      !this.state.jSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        j: newSchedule,
                        jSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.jSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.j,
                      !this.state.jSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        j: newSchedule,
                        jSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.jSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            6 pm
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.k,
                      !this.state.kSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        k: newSchedule,
                        kSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.kSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.k,
                      !this.state.kSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        k: newSchedule,
                        kSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.kSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.k,
                      !this.state.kSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        k: newSchedule,
                        kSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.kSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.k,
                      !this.state.kSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        k: newSchedule,
                        kSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.kSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.k,
                      !this.state.kSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        k: newSchedule,
                        kSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.kSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.k,
                      !this.state.kSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        k: newSchedule,
                        kSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.kSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.k,
                      !this.state.kSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        k: newSchedule,
                        kSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.kSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            7 pm
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.l,
                      !this.state.lSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        l: newSchedule,
                        lSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.lSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.l,
                      !this.state.lSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        l: newSchedule,
                        lSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.lSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.l,
                      !this.state.lSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        l: newSchedule,
                        lSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.lSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.l,
                      !this.state.lSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        l: newSchedule,
                        lSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.lSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.l,
                      !this.state.lSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        l: newSchedule,
                        lSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.lSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.l,
                      !this.state.lSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        l: newSchedule,
                        lSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.lSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.l,
                      !this.state.lSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        l: newSchedule,
                        lSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.lSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            8 pm
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.m,
                      !this.state.mSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        m: newSchedule,
                        mSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.mSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.m,
                      !this.state.mSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        m: newSchedule,
                        mSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.mSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.m,
                      !this.state.mSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        m: newSchedule,
                        mSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.mSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.m,
                      !this.state.mSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        m: newSchedule,
                        mSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.mSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.m,
                      !this.state.mSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        m: newSchedule,
                        mSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.mSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.m,
                      !this.state.mSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        m: newSchedule,
                        mSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.mSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.m,
                      !this.state.mSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        m: newSchedule,
                        mSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.mSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'flex-start',
              fontSize: 8,
              textAlign: 'center',
            }}>
            9 pm
          </Text>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.n,
                      !this.state.nSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        n: newSchedule,
                        nSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.nSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.n,
                      !this.state.nSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        n: newSchedule,
                        nSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.nSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.n,
                      !this.state.nSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        n: newSchedule,
                        nSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.nSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.n,
                      !this.state.nSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        n: newSchedule,
                        nSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.nSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.n,
                      !this.state.nSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        n: newSchedule,
                        nSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.nSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.n,
                      !this.state.nSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        n: newSchedule,
                        nSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.nSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.n,
                      !this.state.nSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        n: newSchedule,
                        nSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.nSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: 40,
          }}>
          <View style={{flex: 1, justifyContent: 'space-between', height: 40}}>
            <Text style={{fontSize: 8, textAlign: 'center'}}>10 pm</Text>
            <Text style={{fontSize: 8, textAlign: 'center'}}>11 pm</Text>
          </View>
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.o,
                      !this.state.oSchedule.sun,
                      1,
                    );
                    this.setState(
                      {
                        o: newSchedule,
                        oSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.oSchedule.sun ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.o,
                      !this.state.oSchedule.mon,
                      2,
                    );
                    this.setState(
                      {
                        o: newSchedule,
                        oSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.oSchedule.mon ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.o,
                      !this.state.oSchedule.tue,
                      3,
                    );
                    this.setState(
                      {
                        o: newSchedule,
                        oSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.oSchedule.tue ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.o,
                      !this.state.oSchedule.wed,
                      4,
                    );
                    this.setState(
                      {
                        o: newSchedule,
                        oSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.oSchedule.wed ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.o,
                      !this.state.oSchedule.thu,
                      5,
                    );
                    this.setState(
                      {
                        o: newSchedule,
                        oSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.oSchedule.thu ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.o,
                      !this.state.oSchedule.fri,
                      6,
                    );
                    this.setState(
                      {
                        o: newSchedule,
                        oSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.oSchedule.fri ? '#BDF287' : '#fff',
            }}
          />
          <TouchableOpacity
            onPress={
              this.props.readOnly
                ? () => {}
                : () => {
                    let newSchedule = insertTutorSchedule(
                      this.state.o,
                      !this.state.oSchedule.sat,
                      7,
                    );
                    this.setState(
                      {
                        o: newSchedule,
                        oSchedule: parseTutorSchedule(newSchedule),
                      },
                      () => {
                        const {
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        } = this.state;
                        this.props.allTutorSchedule({
                          a,
                          b,
                          c,
                          d,
                          e,
                          f,
                          g,
                          h,
                          i,
                          j,
                          k,
                          l,
                          m,
                          n,
                          o,
                        });
                      },
                    );
                  }
            }
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: '#979797',
              height: '100%',
              backgroundColor: this.state.oSchedule.sat ? '#BDF287' : '#fff',
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
  },
});

// const mapStateToProps = state => {
//   return {
//     tutorSchedule: state.ResourcesReducers && state.ResourcesReducers.schedule,
//   };
// };

export default TutorSchedule;
// export default connect(mapStateToProps, {getTutorSched})(TutorSchedule);
