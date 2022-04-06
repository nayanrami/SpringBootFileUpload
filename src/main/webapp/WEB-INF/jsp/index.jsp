<%@include file="component/header.jsp"%>
<%@include file="component/navbar.jsp"%>
<div class="container">
	<form action="uploaddata" method="post" enctype="multipart/form-data">
		<table class="table borderless">
			<tr>
				<td><input type="text" name="enrollmentno" class="form-control"
					placeholder="Enter Your Enrollment Number" /></td>
			</tr>
			<tr>
				<td><input type="file" name="file" /></td>
			</tr>
			<tr>
				<td><input type="submit" class="btn btn-danger" /></td>
			</tr>
		</table>
	</form>
</div>
<%@include file="component/footer.jsp"%>