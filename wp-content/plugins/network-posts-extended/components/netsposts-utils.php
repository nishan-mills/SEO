<?php/** * Created by PhpStorm. * User: Andrew * Date: 26.07.2017 * Time: 9:54 *//* * Function to search value in array excluding spaces */function array_has_value( $needle, $array ) {	foreach ( $array as $value ) {		if ( trim( $needle ) == trim( $value ) ) {			return true;		}	}	return false;}function array_msort( $array, $cols ) {	$colarr = array();	foreach ( $cols as $col => $order ) {		$colarr[ $col ] = array();		foreach ( $array as $k => $row ) {			$colarr[ $col ][ '_' . $k ] = strtolower( $row[ $col ] );		}	}	$eval = 'array_multisort(';	foreach ( $cols as $col => $order ) {		$eval .= '$colarr[\'' . $col . '\'],' . $order . ',';	}	$eval = substr( $eval, 0, - 1 ) . ');';	eval( $eval );	$ret = array();	foreach ( $colarr as $col => $arr ) {		foreach ( $arr as $k => $v ) {			$k = substr( $k, 1 );			if ( ! isset( $ret[ $k ] ) ) {				$ret[ $k ] = $array[ $k ];			}			$ret[ $k ][ $col ] = $array[ $k ][ $col ];		}	}	return $ret;}function custom_sort( $a, $b ) {	if ( array_key_exists( 'post_date', $a ) && array_key_exists( 'post_date', $b ) ) {		return $a['post_date'] < $b['post_date'];	} else if ( array_key_exists( 'post_date', $a ) ) {		return false;	} else if ( array_key_exists( 'post_date', $b ) ) {		return true;	} else {		return false;	}}function format_exclusion( $table_name, $column_name, $values ) {	if ( is_array( $values ) ) {		$result = '(';		foreach ( $values as $value ) {			$result .= "({$table_name}.{$column_name} != $value[$column_name]) AND ";		}		if ( strlen( $result ) > 1 ) {			$result = mb_substr( $result, 0, strlen( $result ) - 4 );			$result .= ')';			return $result;		} else {			return '';		}	} else {		return '';	}}function format_inclusion( $table_name, $column_name, $values ) {	if ( is_array( $values ) ) {		if( count( $values ) > 0 ) {			$result = '(';			foreach ( $values as $value ) {				$result .= "({$table_name}.{$column_name} = $value[$column_name]) OR ";			}			if ( strlen( $result ) > 1 ) {				$result = mb_substr( $result, 0, strlen( $result ) - 3 );				$result .= ')';				return $result;			} else {				return '';			}		}		else{			return "({$table_name}.{$column_name} = '')";		}	} else {		return '';	}}function get_letters_excerpt( $length, $content, $permalink, $has_shortcode = false ) {	if ( ! $length ) {		return $content;	} else {		if ( ! $has_shortcode ) {			$content = strip_tags( $content );		}		$content = substr( $content, 0, intval( $length ) );		$words = explode( ' ', $content );		array_pop( $words );		$content = implode( ' ', $words );		/* Original Code return   $content.'... <a href="'.$permalink.'">   '.__('read more&rarr;','trans-nlp').'</a>'; */		/* Edited Code Turned argument 'read more&rarr;' to ''*/		return $content . '... <a href="' . $permalink . '">   ' . __( '', 'trans-nlp' ) . '</a>';	}}function get_words_excerpt( $length, $content, $permalink, $has_shortcode = false ) {	if ( ! $length ) {		return $content;	} else {		if ( ! $has_shortcode ) {			$content = strip_tags( $content );		}		$words = explode( ' ', $content );		if ( count( $words ) > $length ) {			$words = array_slice( $words, 0, $length );			$content = implode( ' ', $words );			/* Original Code return   $content.'... <a href="'.$permalink.'">   '.__('read more&rarr;','trans-nlp').'</a>'; */			/* Edited Code Turned argument 'read more&rarr;' to ''*/			return $content . '... <a href="' . $permalink . '">   ' . __( '', 'trans-nlp' ) . '</a>';		} else {			$content = implode( ' ', $words );			/* Original Code return   $content.' <a href="'.$permalink.'">   '.__('read more&rarr;','trans-nlp').'</a>'; */			/* Edited Code Turned argument 'read more&rarr;' to ''*/			return $content . ' <a href="' . $permalink . '">   ' . __( '', 'trans-nlp' ) . '</a>';		}	}}function removeElementWithValue( &$array, $key, $value ) {	foreach ( $array as $subKey => $subArray ) {		if ( $subArray[ $key ] == $value ) {			unset( $array[ $subKey ] );		}	}}function sanitize_quotes( $str ) {	return str_replace( '&#039;', '"', $str );}function ShortenText( $text, $limit ) {	$chars_limit = $limit;	$chars_text = strlen( $text );	$text = $text . " ";	$text = substr( $text, 0, $chars_limit );	$text = substr( $text, 0, strrpos( $text, ' ' ) );	if ( $chars_text > $chars_limit ) {		$text = $text . "...";	}	return $text;}function super_unique( $array, $key ) {	$temp_array = array();	foreach ( $array as $v ) {		if ( ! isset( $temp_array[ $v[ $key ] ] ) ) {			$temp_array[ $v[ $key ] ] = $v;		}	}	$array = array_values( $temp_array );	return $array;}/** * @param $str String representation of date or 'now' * * @return DateTime|null Returns date with time equal 00:00:00 */function netsposts_strtodate($str){	$filter_date   = null;	if ( $str ) {		$filter_date = new DateTime( $str );		$filter_date->setTime( 0, 0, 0 );	} else {		$filter_date = new DateTime();	}	return $filter_date;}/** * @param array $src_array * @param array $show_after_date - An array contains field name and date to filter posts after target date including today. * @param array $show_before_date - An array contains field name and date to filter posts before target date not including today. * @param $show_for_today - String Field name to filter posts during today. * * @return array Returns array filtered by date fields */function netsposts_filter_by_date(array $src_array, array $show_after_date = null, array $show_before_date = null, $show_for_today = null ){	$current_date = netsposts_strtodate('now');	return array_filter( $src_array, function ( $post ) use ( $show_after_date, $show_before_date, $show_for_today, $current_date ) {		try {			$result = false;			if($show_after_date) {				if(isset($post[ $show_after_date[0] ])) {					$post_after_date = netsposts_strtodate( $post[ $show_after_date[0] ] );					$result = $result || $post_after_date->getTimestamp() >= $show_after_date[1]->getTimestamp();				}			}			if($show_before_date) {				if( isset( $post[ $show_before_date[0] ] ) ) {					$post_before_date = netsposts_strtodate( $post[ $show_before_date[0] ] );					$result = $result || $post_before_date->getTimestamp() < $show_before_date[1]->getTimestamp();				}			}			if($show_for_today) {				if( isset( $post[ $show_for_today] ) ) {					$post_today_date = new DateTime( $post[ $show_for_today ] );					$result = $result || $post_today_date->getTimestamp() === $current_date->getTimestamp();				}			}			return $result;		} catch ( Exception $e ) {			return false;		}	} );}function netsposts_create_label_from_id($id){	$fullname  = str_replace( "_", " ", $id );	return strtoupper( mb_substr( $fullname, 0, 1 ) ) . mb_substr( $fullname, 1 );}